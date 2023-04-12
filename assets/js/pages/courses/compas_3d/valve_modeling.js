// import '../../../app';

import anime from 'animejs';

import BurgerMenuToggle from '../../../modules/burger-menu-toggle';
import CommentsExpand from "../../../modules/comments-list";
import ModulesList from "../../../modules/modules-list";
import Popup from "../../../modules/popup";
import MouseParallax from "../../../modules/animation/MouseParallax";
import FormHandler from "../../../modules/FormHandler";

import {emailSubmitValidator, phoneSubmitValidator, notEmptySubmitValidator} from "../../../utils/validation/FormSubmitValidators";
import {phoneLiveValidator} from "../../../utils/validation/LiveValidators";

// Анимирование Программы курса
document.querySelectorAll('.programs__item').forEach(element => {

    const container = document.querySelector('.program-block');
    const collapseList = element.querySelector('.program-content');

    element.addEventListener('click', () => {
        let isOpen = element.classList.contains('expanded');

        const containerBoundingHight = container.getBoundingClientRect().height
        const collapseListHeight = collapseList.getBoundingClientRect().height
  
        if(!isOpen){
            anime({
                targets: element,
                height: 92,
                duration: 300,
                easing: 'linear'
            });
        } else {
            anime({
                targets: element,
                height: containerBoundingHight + collapseListHeight,
                duration: 300,
                easing: 'linear'
            });
        }
    })
});

// Анимирование Отзывов
document.querySelectorAll('.review-item__content').forEach(element => {

    const hideBtn = element.querySelector('.hide-review');
    const container = element.querySelector('.reviewer-text-wrapper');
    const collapseList = element.querySelector('.reviewer-text');

    element.addEventListener('click', () => {
        let isOpen = element.classList.contains('expanded');

        const hideBtnHight = hideBtn.getBoundingClientRect().height
        const collapseListHeight = collapseList.getBoundingClientRect().height
  
        if(!isOpen){
            anime({
                targets: container,
                height: 140,
                duration: 300,
                easing: 'linear'
            });
        } else {
            anime({
                targets: container,
                height: collapseListHeight + hideBtnHight,
                duration: 300,
                easing: 'linear'
            });
        }
    })
});

// переключатель инпутов в форме
document.querySelector('#popup-im-student-checkbox').addEventListener('change', (e) => {
    const workerInputsWrapper = document.querySelector('.popup-apply-form-choice__worker');
    const studentInputsWrapper = document.querySelector('.popup-apply-form-choice__student');

    if(e.target.checked){
        workerInputsWrapper.style.display = 'none';
        studentInputsWrapper.style.display = 'block';
    } else {
        workerInputsWrapper.style.display = 'block';
        studentInputsWrapper.style.display = 'none';
    }
});

// переключатель инпутов в форме
document.querySelector('#im-student-checkbox').addEventListener('change', (e) => {
    const workerInputsWrapper = document.querySelector('.apply-form-choice__worker');
    const studentInputsWrapper = document.querySelector('.apply-form-choice__student');

    if(e.target.checked){
        workerInputsWrapper.style.display = 'none';
        studentInputsWrapper.style.display = 'block';
    } else {
        workerInputsWrapper.style.display = 'block';
        studentInputsWrapper.style.display = 'none';
    }
})

const rightNavBurger = document.querySelector('.top-nav__burger-menu');
// Скрываем .top-nav__right когда открыто мобильное меню
const rightNavBurgerObserver = new MutationObserver((mutations) => {

    if(document.body.clientWidth <= 720){
        return;
    }

    const rightNav = document.querySelector('.top-nav__right');
    if(rightNavBurger.getAttribute('is-open') === 'false'){
        rightNav.style.display = 'block';
    } else {
        rightNav.style.display = 'none';
    }
});
rightNavBurgerObserver.observe(rightNavBurger, {
    attributes: true //Слушаем только атрибуты
});
new BurgerMenuToggle(
    '.top-nav__burger-menu-icon',
    '.top-nav__burger-menu',
    'open',
    '.nav-burger-menu__close',
    '.popup-overlay.nav-burger-menu-overlay',
);

// Popup по открытию кнопки из мобильного меню
// Popup по открытию кнопки из навигации
// Popup по открытию кнопки из мобильного меню
new Popup(
    '.promo-text__enroll, .top-nav__button, .nav-mobile-enroll-btn',
    '.popup-apply-form-overlay',
    'hidden',
    '.popup__close'
);

new ModulesList(
    '.programs__item',
    '.program-block',
    'expanded'
)

new CommentsExpand(
    '.review__wrapper',
    '.review-item',
    '.expand-all-comments',
    '.hide-all-comments',
    '.review-item__content',
    '.expand-review',
    '.hide-review',
    'expanded',
    3
);

new MouseParallax(
    '.promo-animated__3D-1',
    1.7,
    2
);

new MouseParallax(
    '.promo-animated__3D-2',
    1.5,
    -1.5
);

new FormHandler(
    '/sign-up/course/valve-modeling',
    '.popup-apply-form',
    {
        'input[name="name_and_surname"]': {
            inputName: 'Имя',
            submitValidators: [notEmptySubmitValidator]
        },
        'input[name="email"]': {
            inputName: 'Имейл',
            submitValidators: [emailSubmitValidator]
        },
        'input[name="phone"]': {
            inputName: 'Телефон',
            liveValidator: phoneLiveValidator,
            submitValidators: [phoneSubmitValidator]
        },
    },
    'error',
    '.popup-apply-form__errors',
    '.popup-apply-form__success'
);

new FormHandler(
    '/sign-up/course/valve-modeling',
    '.apply-form__form',
    {
        'input[name="name_and_surname"]': {
            inputName: 'Имя',
            submitValidators: [notEmptySubmitValidator]
        },
        'input[name="email"]': {
            inputName: 'Имейл',
            submitValidators: [emailSubmitValidator]
        },
        'input[name="phone"]': {
            inputName: 'Телефон',
            liveValidator: phoneLiveValidator,
            submitValidators: [phoneSubmitValidator]
        },
    },
    'error',
    '.apply-form__errors',
    '.apply-form__success'
);