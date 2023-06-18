const Coment = require('./components/_Coment.js');


//Программа обучения
document.querySelectorAll('.modules_more_3 li').forEach((active, index) => active.addEventListener('click', function (e) {
    const modules = document.querySelectorAll('.modules_more_3 li');
<<<<<<< HEAD
    const modulesText = document.querySelectorAll('.modules .module');
=======
    const modulesText = document.querySelectorAll('.module');
    console.log(modulesText)
>>>>>>> remotes/origin/master
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

// Часто задаваемый вопросы
document.querySelectorAll('.faq .split .list').forEach(row => {

    row.addEventListener('click', e => {
        row.classList.toggle('FAQ__hidden')
    })

    row.querySelector('.list__collapse-comment').addEventListener('click', (e) => {
        e.stopPropagation()
        row.classList.toggle('FAQ__hidden')
    })
})

// Как проходит обучение
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

        // document.querySelector(`.${className}.active`).classList.remove('active');
        // document.querySelectorAll(`.${className}`)[index].classList.add('active');
    }

}

animationController.createAnimation('main-module-box');
animationController.createAnimation('training-box');

Coment.init()
