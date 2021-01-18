const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let   isJumping  = false;
let position = 0;


function handleKeyup(event) {
    if (event.keyCode ===32 ) {
        if(!isJumping){
            jump();
        }
       
    }
}

function jump() {
  
    isJumping  = true;

    let upInterval = setInterval(() =>{

        //parar de subir
        if (position>=150) {
            clearInterval(upInterval); //para de subir

         //descendo  
         let downInterval = setInterval(() =>{
             if (position <=0) {
                clearInterval(downInterval); 
                isJumping  = false;
             } else{
                 position -=30;
                 dino.style.bottom = position + "px";// posição em pixel que irá subir 
             }
         },30);     

        }else{
            //subundo
            position += 30;
            dino.style.bottom = position + "px";// posição em pixel que irá subir
        }
    },30);
}

function stopUp() {
    
}
    
function createCactus() {

    const cactus = document.createElement("div");
    let cactusPosition = 2000;
    let randomTime = Math.random() * 10000;

    cactus.classList.add("cactus");
    cactus.style.left = 2000 + "px";
    background.appendChild(cactus); // adiciona o cactus ao background

    let leftInterval  = setInterval(()=>{
       
        if (cactusPosition < -60 ){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if (cactusPosition > 0  && cactusPosition < 60 && position  < 60){
        //fim de jogo
                  clearInterval(leftInterval);
                  document.body.innerHTML = '<h1 class="game-over">Fim de jogo!!</h1>';
        }else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + "px";
        }
    },40);

    setTimeout(createCactus,randomTime);// chama a funcçao depois de um determinado tempo,  no caso aqui chama a mesma função  dentro dela, ou seja recursividade
}



createCactus();
document.addEventListener("keyup", handleKeyup);
