let homeScoreBtnOne = document.getElementById('home-score-btn')
let homeStoreF = document.getElementById('home-score')
let homeScore = 0

function oneHomePoint() {
    homeScore += 1
    homeStoreF.innerText = homeScore
}

let guestScoreBtnOne = document.getElementById('guest-score-btn')
let guestStoreF = document.getElementById('guest-score')
let guestScore = 0

function oneGuestPoint() {
    guestScore += 1
    guestStoreF.innerText = guestScore
}
