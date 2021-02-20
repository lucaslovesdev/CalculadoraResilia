let display = document.getElementById("display")

function mostra (caractere){
    display.textContent += caractere 
}

function deleta(){
    let arr = display.textContent.split('')
    arr.pop()

    display.textContent = arr.join('')
}


function reseta(){    
        display.textContent = ''    
}

function resultado(){
    let res = eval(display.textContent)
    display.textContent = res.toLocaleString('pt-BR')
}