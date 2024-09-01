// const grid = document.querySelector('.grid');

// const cards = [
//     'asdasd',
//     ''
// ]

// const createElement = (tag,className) => {
//     const element = document.createElement(tag);
//     element.className = className;
//     return element;

// }

// const revealCard = ({ target }) => {
//     target.parentNode.classList.add('reveal-card');
// }

// const createCard = () => {
//     const card = createElement('div', 'card');
//     const front = createElement('div', 'face front');
//     const back = createElement('div', 'face back');


//     card.appendChild(front);
//     card.appendChild(back);

//     card.addEventListener('click', revealCard);

//    return card;


// }

// const loadGame = () => {


//     const ShuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

//     ShuffledArray.forEach((character) => {
//       const card = createCard(character);
//       grid.appendChild(card);
//     });
// }

// loadGame();
let cartas,rand=0
let playerx
let numer,coni=0
 function rdmcard() {
    
    cartas=document.getElementsByClassName('card')
    for (let index = 0; index < cartas.length; index++) {
        cartas[index].style.display='none'
    }
    rand = Math.floor((Math.random()*12))
    cartas[rand].style.display="block"
 }

 function check(escolh) {
    playerx=sessionStorage.getItem('play')
    // console.log(playerx)
    if (escolh==1) {
        numer=Number(playerx)
        console.log(numer)
        switch (numer) {
            case 1:
                
                coni=Number(sessionStorage.getItem('coin1'))
                coni+=20
                sessionStorage.setItem('coin1',coni)
                break;
            case 2:
                console.log("2pi")
                coni=Number(sessionStorage.getItem('coin2'))
                coni+=20
                sessionStorage.setItem('coin2',coni)
                break;
            case 3:
                console.log("3pi")
                coni=Number(sessionStorage.getItem('coin3'))
                coni+=20
                sessionStorage.setItem('coin3',coni)
                break;
            case 4:
                console.log("4pi")
                coni=Number(sessionStorage.getItem('coin4'))
                coni+=20
                sessionStorage.setItem('coin4',coni)
                break;
        }
        alert('Correto! Você recebeu 20 bitcoins!')
        window.location.assign('http://127.0.0.1:5500/jogo_lpc_versaofinal/tabuleiro.html')
    } else {
        alert('Errado! Você recebeu é rola!')
        window.location.assign('http://127.0.0.1:5500/jogo_lpc_versaofinal/tabuleiro.html')
    }
 }