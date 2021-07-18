const pedra = document.getElementById('pedra')
const papel = document.getElementById('papel')
const tesoura = document.getElementById('tesoura')
const btn = document.getElementById('btn')
const computer = document.getElementById('computer')
let escolha
let msg = document.createElement('h1')
msg.innerText=''
const resposta = document.getElementById('msg')
resposta.appendChild(msg)


function random(){
   

    switch(Math.floor(Math.random()* 3)){
        case 0:
            computer.setAttribute('src', './assets/tesoura.png');
            if(escolha === 2){
                
                msg.innerText='Ganhou!!!'
            }
            if(escolha === 1){
            
                msg.innerText='Empate u.u'
            }
            if(escolha === 3){
               
                msg.innerText='Perdeste :('
            }
            break;
          case 1:
            
            computer.setAttribute('src','./assets/pedra.png');
            if(escolha === 1){
                
                msg.innerText='Perdeste :('
            }
            if(escolha === 2){
                
                msg.innerText='Empate u.u'
            }
            if(escolha === 3){
               
                msg.innerText='Ganhou!!!'
            }
            break;
          case 2:
            computer.setAttribute('src', './assets/papel.png');
            if(escolha === 2){
                
                msg.innerText='Perdeste :('
            }
            if(escolha === 1){
                
                msg.innerText='Ganhou!!!'
            }
            if(escolha === 3){
                
                msg.innerText='Empate u.u'
            }
            break;

    }
}

let valor =false;
pedra.addEventListener('click', function(){
    if(valor === true){
        pedra.style.border='none'
        papel.style.border='none'
        tesoura.style.border='none'
        pedra.style.background='none'
        papel.style.background='none'
        tesoura.style.background='none'
    }
    pedra.style.background='red'
    pedra.style.border='2px solid black'
    pedra.style.borderRadius='50%'
    valor = true
    escolha = 2
})
papel.addEventListener('click', function(){
    if(valor === true){
        pedra.style.background='none'
        tesoura.style.background='none'
        papel.style.background='none'
        pedra.style.border='none'
        papel.style.border='none'
        tesoura.style.border='none'
    }
    papel.style.background="red"
    papel.style.border='2px solid black'
    papel.style.borderRadius='50%'
    valor = true
    escolha = 3
})
tesoura.addEventListener('click', function(){
    if(valor === true){
        pedra.style.background='none'
        papel.style.background='none'
        tesoura.style.background='none'
        pedra.style.border='none'
        papel.style.border='none'
        tesoura.style.border='none'
    }
    tesoura.style.background='red'
    tesoura.style.border='2px solid black'
    tesoura.style.borderRadius='50%'
    valor = true
    escolha = 1
})


btn.addEventListener('click', function(e){
    if(valor === false){
        alert('Escolha uma opção')
    }else{
    msg.innerText=''
    random()
    }
  
})

