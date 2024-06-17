let player = {
    name : prompt("Enter your name:"),
    chips : 150
}
let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = " ";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");//let sumEl = document.querySelector("#sum-el"); is another alternative.
let cardEl = document.getElementById("card-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;


function getRandomCard() { // this  function will be accessible even at line 1 and 2 regardless how                                far down it is written//
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if(randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard; 
    renderGame();
}


function renderGame() {
    cardEl.textContent = "Cards: ";
    for ( let i=0; i< cards.length; i++){
        cardEl.textContent += cards[i]+" "; 
    } 
    sumEl.textContent = "Sum: " + sum;
    if (sum<=20){
    message = "Do you want to draw a new card?";
 } else if(sum===21) {
    message = "Woahoo! You've got a BlackJack!";
    hasBlackJack = true;
 } else {
    message = "You've lost the game";
    isAlive = false;
 }
 messageEl.textContent = message;
}


function newCard() {
    if (isAlive===true && hasBlackJack===false){
        let card = getRandomCard()
        sum+= card;
        cards.push(card);
        console.log(cards);
        renderGame()
    }
}

