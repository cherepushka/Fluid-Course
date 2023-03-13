import '../../../../app';

const Coment = require('./components/_Coment.js');
const Modules = require('./components/_Modules.js');
import IMask from 'imask';

import { 
    notEmptySubmitValidator, 
    emailSubmitValidator, 
    phoneSubmitValidator,
} from '../../../../utils/validation/FormSubmitValidators';
import { phoneLiveValidator } from '../../../../utils/validation/LiveValidators';

import FormHandler from '../../../../modules/FormHandler';

const animationController = new class {

    createAnimation(className, maxCount = 4, time = 5000, onclick = false){
        let mainSelectX = 0
        const interval = setInterval(() => {
            mainSelectX++
            if (mainSelectX >= maxCount)
                mainSelectX = 0

            this.select(className, mainSelectX)
        }, time);

        if (!onclick){

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

    select(className, index){
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


        document.querySelector(`.${className}.active`).classList.remove('active');
        document.querySelectorAll(`.${className}`)[index].classList.add('active');
    }

}

animationController.createAnimation('main-module-box');
animationController.createAnimation('training-box');

Coment.init()
Modules.init()

document.body.onscroll = function(e) {
    const scroll = document.documentElement.scrollTop || document.body.scrollTop
    document.querySelector('.stick-header').style.setProperty('--show', scroll>200 ? 1 : 0)
}

IMask(document.querySelector('.phone'), {mask: '+{7} (000) 000-00-00'});

new FormHandler(
    '/sign-up/course/for_purchasers_and_managers',
    '.Cource_participation form',
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
            submitValidators: [phoneSubmitValidator]
        },
        'input[name="company"]': {
            inputName: 'Компания',
            submitValidators: [notEmptySubmitValidator]
        },
        'input[name="job"]': {
            inputName: 'Должность',
            submitValidators: [notEmptySubmitValidator]
        },
    },
    'error',
    '.apply-form__errors',
    '.apply-form__success'
);