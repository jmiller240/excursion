// @AUTHOR - Jack Miller
// @DATE   - June 2022

// let winner = document.getElementById('bet_winner');
// let value = document.getElementById('bet_value');
// let bet_button = document.getElementById('bet_button');

const form = document.getElementById('bet_form');
const user_bets = document.getElementById('user_bets');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let new_bet = document.createElement('p');
    new_bet.innerHTML = form.elements.winner.value + " - $" + form.elements.value.value;
    user_bets.appendChild(new_bet); 
    form.reset();
});