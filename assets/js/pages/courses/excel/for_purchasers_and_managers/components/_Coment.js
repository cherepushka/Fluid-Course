class Coment extends HTMLElement {
    static comentIndex = 0
    static maxCount = 0
    static list = []
    static active = false

    static typeSpeed = 60
    
    
    name = ''
    text = ''
    cursor = 0

    textCompoment

    constructor(){
        super()

        // this.attachShadow({ mode: "open" })

        Coment.maxCount++
        Coment.list.push(this)
        if (!Coment.active)
            Coment.showIndex()

    }


    connectedCallback() {
        this.name = this.getAttribute('client')
        this.text = this.getAttribute('text').trim().replace(/\s+\s/g, ' ')

        this.update()
    }

    update(){
        this.innerHTML = ''
        this.cursor = 0

        const name = document.createElement('h2')
        name.innerText = this.name

        this.textCompoment = document.createElement('p')
        this.textCompoment.innerText = ''


        this.appendChild(name)
        this.appendChild(this.textCompoment)
    }

    nextChar(){
        if (this.cursor < this.text.length){
            this.cursor++
            const text = this.text.slice(0, this.cursor)
            
            this.textCompoment.innerText = text
        }
    }



    static types(){
        const interval = setInterval(() => {
            Coment.active.nextChar()
        }, Coment.typeSpeed);   
    }


    static prevComent(){
        Coment.comentIndex--
        if (Coment.comentIndex<0)
            Coment.comentIndex = Coment.maxCount-1

        Coment.active.hide()
        Coment.showIndex()
    }


    static nextComent(){
        Coment.comentIndex++
        if (Coment.comentIndex>=Coment.maxCount)
            Coment.comentIndex = 0

        Coment.showIndex()
    }


    hide(){
        this.classList.remove('active')
    }

    static showIndex(){
        if (Coment.active)
            Coment.active.hide()

        Coment.active = Coment.list[Coment.comentIndex]
        Coment.active.classList.add('active')
        Coment.active.cursor = 0
    }






    static init(){
        customElements.define("client-coment", Coment);
        
        const interval = setInterval(() => {
            Coment.nextComent()
        }, 10000);


        document.querySelectorAll('.carousel-control-prev').forEach(element => {
            element.onclick = function() {
                clearInterval(interval)
                Coment.prevComent()
            }
        })

        document.querySelectorAll('.carousel-control-next').forEach(element => {
            element.onclick = function() {
                clearInterval(interval)
                Coment.nextComent()
            }
        })
        Coment.types()
    }
}


module.exports = Coment