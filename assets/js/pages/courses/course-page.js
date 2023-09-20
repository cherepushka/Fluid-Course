const Coment = require('./components/_Coment.js');


//Программа обучения СТАРТ
document.querySelectorAll('.modules_more_3 li').forEach((active, index) => active.addEventListener('click', function (e) {
    const modules = document.querySelectorAll('.modules_more_3 li');
    const modulesText = document.querySelectorAll('.module');
    modules.forEach(el => {
        if (el.classList.contains('active')) {
            el.classList.remove('active');
            active.classList.add('active');
        }
    });
    modulesText.forEach(el => {
        if (el.classList.contains('active')) {
            el.classList.remove('active');
        }
    });
    modulesText[index].classList.add('active');
}));
//Программа обучения КОНЕЦ

// Selected box (двигающаяся рамка) на баннере СТАРТ
let selectedBox = document.querySelector('.selected_box');
let mainModuleBox = document.querySelector('.main-module-box');
selectedBox.style.width = mainModuleBox.clientWidth + 'px';
selectedBox.style.height = mainModuleBox.clientHeight + 'px';
window.addEventListener('resize', () => {
    let selectedBox = document.querySelector('.selected_box');
    let mainModuleBox = document.querySelector('.main-module-box');
    selectedBox.style.width = mainModuleBox.clientWidth + 'px';
    selectedBox.style.height = mainModuleBox.clientHeight + 'px';
})
document.addEventListener("DOMContentLoaded", () => {
    selectedBox.classList.remove('d-none');
});
// Selected box (двигающаяся рамка) на баннере КОНЕЦ

// Часто задаваемые вопросы СТАРТ
document.querySelectorAll('.faq .split .list').forEach(row => {

    row.addEventListener('click', e => {
        row.classList.toggle('FAQ__hidden')
    })

    row.querySelector('.list__collapse-comment').addEventListener('click', (e) => {
        e.stopPropagation()
        row.classList.toggle('FAQ__hidden')
    })
})
// Часто задаваемые вопросы КОНЕЦ

// Анимация видеоматериалов СТАРТ
let moveToStart = document.querySelectorAll('.move-to-start li');
let moveToEnd = document.querySelectorAll('.move-to-end li');
window.addEventListener("scroll", () => {

    moveToStart.forEach(el => {
        if (isFullyVisible(el)) {
            el.classList.add('transform-to-start');
        } else {
            el.classList.remove('transform-to-start');
        }
    })
    moveToEnd.forEach(el => {
        if (isFullyVisible(el)) {
            el.classList.add('transform-to-end');
        } else {
            el.classList.remove('transform-to-end');
        }
    })
})

function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return top >= 0 && bottom <= window.innerHeight;
}

// Анимация видеоматериалов КОНЕЦ


// Как проходит обучение СТАРТ
const tiles = document.querySelectorAll('.final_work_stage h1');
const tileMinIndex = 0;
const tileMaxIndex = tiles.length - 1;
let tileCurrentIndex = tileMinIndex;
const tileSourceTextColor = tiles[tileMinIndex].style.color;

tiles[tileCurrentIndex].style.color = '#FF5500';
tileCurrentIndex++;

setInterval(() => {
    if (tileCurrentIndex - 1 >= tileMinIndex) {
        tiles[tileCurrentIndex - 1].style.color = tileSourceTextColor;
    } else {
        tiles[tileMaxIndex].style.color = tileSourceTextColor;
    }

    tiles[tileCurrentIndex].style.color = '#FF5500';
    tileCurrentIndex++

    if (tileCurrentIndex > tileMaxIndex) {
        tileCurrentIndex = tileMinIndex
    }
}, 4000)
// Как проходит обучение КОНЕЦ



const animationController = new class {

    createAnimation(className, maxCount = 4, time = 5000, onclick = false) {
        let mainSelectX = 0
        const interval = setInterval(() => {
            mainSelectX++
            if (mainSelectX >= maxCount)
                mainSelectX = 0

            this.select(className, mainSelectX)
        }, time);

        if (!onclick) {

            document.querySelectorAll(`.${className}`).forEach((element, index) => {
                element.onclick = () => {
                    clearInterval(interval)
                    this.select(className, index)
                }
            });

        } else {
            onclick()
        }
    }

    select(className, index) {
        document.body.style.setProperty(`--${className}`, index);

        switch (index) {
            case 0:
                document.body.style.setProperty(`--${className}_x`, 0);
                document.body.style.setProperty(`--${className}_y`, 0);
                break;
            case 1:
                document.body.style.setProperty(`--${className}_x`, 1);
                document.body.style.setProperty(`--${className}_y`, 0);
                break;
            case 2:
                document.body.style.setProperty(`--${className}_x`, 0);
                document.body.style.setProperty(`--${className}_y`, 1);
                break;
            case 3:
                document.body.style.setProperty(`--${className}_x`, 1);
                document.body.style.setProperty(`--${className}_y`, 1);
                break;
        }
    }

}

animationController.createAnimation('main-module-box');
animationController.createAnimation('training-box');

Coment.init()
