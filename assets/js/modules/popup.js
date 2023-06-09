import {getBodyScrollTop} from "../utils/DOM";

export default class Popup{

    bodyScrollY = null;
    bodyWasScrolledByThis = false;

    constructor(
        modal_open_selector,
        modal_overlay_selector,
        overlay_hide_class = 'hidden',
        modal_close_btn_selector = false
    ) {
        this.modal_open_selector = modal_open_selector
        this.modal_openers = document.querySelectorAll(modal_open_selector);
        this.poup_overlay = document.querySelector(modal_overlay_selector);

        this.modal_close_btn = false;
        if(modal_close_btn_selector !== false){
            this.modal_close_btn = document.querySelector(modal_close_btn_selector);
        }

        this.overlay_hide_class = overlay_hide_class;

        this.setupEvents();
    }

    setupEvents(){
        this.modal_openers.forEach(opener => {

            opener.addEventListener('click', event => {
                event.preventDefault();

                this.togglePopup();
            });
        });

        this.poup_overlay.addEventListener('click', event => {
            const target = event.target;

            if (target === this.poup_overlay){
                this.closePopup();
            }
        })

        
        if(this.modal_close_btn){
            this.modal_close_btn.addEventListener('click', () => {
                this.closePopup();
            })
        }
    }

    togglePopup() {
        const isOpen = !this.poup_overlay.classList.contains(this.overlay_hide_class);

        if (!isOpen){
            this.openPopup();
        } else {
            this.closePopup();
        }
    }

    openPopup(){
        // opening popup

        this.poup_overlay.classList.remove(this.overlay_hide_class);

        // Уже открыт какой-то popup
        if(document.body.classList.contains('body-lock')){
            this.bodyWasScrolledByThis = false;
            return;
        }

        this.bodyWasScrolledByThis = true;

        this.bodyScrollY = getBodyScrollTop();
        document.body.style.top = `-${this.bodyScrollY}px`;
        document.body.classList.add('body-lock');

        window.scrollTo({
            left: 0,
            top: this.bodyScrollY
        });
    }

    closePopup(){
        // closing popup

        this.poup_overlay.classList.add(this.overlay_hide_class);

        // Уже открыт какой-то popup
        if(!this.bodyWasScrolledByThis){
            return;
        }

        this.bodyWasScrolledByThis = false

        document.body.classList.remove('body-lock');

        window.scrollTo({
            left: 0,
            top: this.bodyScrollY
        });
    }

}
