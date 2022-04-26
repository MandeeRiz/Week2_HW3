const colorChange = () => {
    let dot = document.getElementsByClassName("gridBox")
    for(let i=0; i<dot.length;i++){
        dot[i].classList.toggle("gridBox2")
    }
    
}

/*
const colorChange = () => {
    let dot = document.getElementsByClassName("gridBox")
    let colors = ["green", "red", "yellow", "orange", "blue"]
    for(let i=0; i<dot.length;i++){
        return dot[i];
        dot[i].style.background = colors[j]
        for (let j=0; j<colors.length; j++){
            
        }
        
        

    }
    
}
    */
