
let cards = []
let sum = 0
let hasBlackjak = false
let isAlive = false
let message = ""

let player = {
    name: "Bablu",
    chips: 200
}

console.log(sum)

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + " : $ " + player.chips

function getRandomCard() {
    let card = Math.floor(Math.random() * 13) + 1
    if (card > 10) {
        return 11
    }
    else if (card === 1) {
        return 1
    }
    else {
        return card
    }
}

function startgame() {
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard
    rendergame()
}
function rendergame() {

    sumEl.textContent = "sum: " + sum

    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🤔"
        isAlive = true
    }

    else if (sum === 21) {
        message = "Wohoo! you've got a blackjack! 😎 "

    }

    else {
        message = "You're out of the game! 😭"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    if (sum < 21) {
        let card = getRandomCard()

        sum += card

        cards.push(card)

        rendergame()
    }
}