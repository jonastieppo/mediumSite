function createLine(i,j,dx,dy=0,id) {
    return `<tspan x="0" dy="${dy}em" dx="${dx}em" id="${id}">M</tspan>`
}

function createLines(){

    const letterInLne = 23
    const line = 16
    const textElement =  document.getElementById("text-animation")
    const lettersId = []

    for (let j=0; j < line;j++){
        const id = `M-${0}|${j}`
        textElement.innerHTML+=createLine(0,j,0,1,id) //a primeira letra deve ter diferente
        lettersId[id]=id
        for(let i=0; i<letterInLne;i++){
            letterCount = i+1
            const id = `M-${i}|${j}`
            textElement.innerHTML+=createLine(i,line,letterCount,0,id)
            lettersId.push(id)

        }
    }

    return lettersId

}


function chanteOpacity(lettersId) {

    const changer = ()=>{

        if(Math.round(Math.random())) {
            // metade pra baixo
            for(let i=0; i<lettersId.length/2; i++){
                
                const element = document.getElementById(lettersId[i])
        
                element.setAttribute("opacity",Math.round(Math.random()))       
            }

        } else {
            //metade pra cima
            for(let i=Math.round(lettersId.length/2); i<lettersId.length; i++){
        
                const element = document.getElementById(lettersId[i])
        
                element.setAttribute("opacity",Math.round(Math.random()))       
            }
            
        }


    }
    
    changer()
    
    setInterval(
        changer
    ,500)


}



window.addEventListener("scroll", (_) => {
    let scroll = this.scrollY;
    let header = document.getElementById("header")
    let getStarted = document.getElementById("get-started")

    if(scroll > 300) {
        header.classList.add("headerScroolY")
        getStarted.classList.remove("bg-black")
        getStarted.classList.add("bg-green","f-color-white")
    } 
    else {
        header.classList.remove("headerScroolY")
        getStarted.classList.add("bg-black")
        getStarted.classList.remove("bg-green","f-color-white")

    }
});