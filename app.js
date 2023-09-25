
let home = 0

let away = 0

function increaseHome() {
    home += 1
    console.log(home)
    updateHomeScore()
    checkHomeScore()
    checkAwayScore()
}

function increaseAway() {
    away += 1
    console.log(away)
    updateAwayScore()
    checkAwayScore()
    updateHomeScore()
}

function increaseHomeMore() {
    home += 3
    console.log(home)
    updateHomeScore()
    checkHomeScore()
    checkAwayScore()
}

function increaseAwayMore() {
    away += 3
    console.log(away)
    updateAwayScore()
    checkAwayScore()
    updateHomeScore()
}


function resetScore() {
    home = 0
    away = 0
    updateHomeScore()
    updateAwayScore()
}

function updateHomeScore() {
    const homeElement = document.getElementById('currentHomeScore')
    homeElement.innerText = home
}

function updateAwayScore() {
    const awayElement = document.getElementById('currentAwayScore')
    awayElement.innerText = away
}

function checkHomeScore() {
    if (home >= 21) {
        console.log('Home Wins!');
        window.alert('Home Wins!');
    }
}

function checkAwayScore() {
    if (away >= 21) {
        console.log('Away Wins!');
        window.alert('Away Wins!')
    }
}