const cards = document.querySelectorAll('.memory-card')
let hasFlippedcard = false
cards.forEach(card => card.addEventListener('click', flipcard))