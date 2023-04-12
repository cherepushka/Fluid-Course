class Modules {

    sliderMOVED = false

    countModules = document.querySelector('.count-modules').getAttribute('data-attr');

    constructor(className) {
        // this.spaceCreate(document.querySelector(`.${className} .space`))
        this.sliderCreate(document.querySelector(`.${className} .scrolled ol`))
        this.railsCreate(document.querySelector(`.${className} .scrolled`))


        document.querySelectorAll('.scrolled li').forEach((element, index) => {
            element.onclick = () => this.selectElement(index)
        })
    }

    selectElement(index) {
        this.rails.scrollTo((this.rails.scrollWidth) / this.countModules * index, 0)
    }

    spaceCreate(space) {
        this.space = space
    }

    sliderCreate(slider) {
        this.slider = slider
    }

    railsCreate(component) {
        this.rails = component
        this.rails.addEventListener('scroll', () => {
            const position = ((this.rails.scrollLeft / (this.rails.scrollWidth - this.rails.clientWidth))) * 100


            this.setScroll(position * position / 100)
        })
    }

    setScroll(position) {
        this.setPosition(position)
    }

    setTransition(status) {
        if (status)
            document.body.style.setProperty('--sliderActiveTransition', 'all .3s ease-in-out')
        else
            document.body.style.setProperty('--sliderActiveTransition', 'none');
    }

    selected = 0
    setPosition(position) {
        // let selectElement = Math.round((position / this.countModules) * this.countModules)
        let selectElement = Math.round(position / (100 / (this.countModules - 1)))
        // console.log('position', position, ' = ', selectElement)
        if (selectElement > this.countModules - 1)
            selectElement = this.countModules - 1


        if (this.selected != selectElement) {
            this.selected = selectElement
            this.removeActive('.scrolled')
            this.removeActive('.modules')

            document.querySelectorAll('.scrolled li')[this.selected].classList.add('active')
            document.querySelectorAll('.modules .module')[this.selected].classList.add('active')
        }
    }


    removeActive(query) {
        const active = document.querySelector(`${query} .active`)
        if (active)
            active.classList.remove('active')
    }


    static init() {
        new Modules('training_program')
    }
}


module.exports = Modules