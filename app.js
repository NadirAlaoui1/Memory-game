const cards = document.querySelectorAll('.memory-card')

let hasFlippedCard = false
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip')

    if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
} else {
    hasFlippedCard = false;
    secondCard = this;

    function checkForMatch() {
    if (firstCard.dataset.framework ===
        secondCard.dataset.framework)  {

            
        } else {
            setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
        },1000);
    }
}

function disableCards(){firstCard.removeEventListener('click', flipCard);
secondCard.removeEventListener('click', flipCard);
}

cards.forEach(card => card.addEventListener('click', flipcard))