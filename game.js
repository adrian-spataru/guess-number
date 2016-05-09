var number = 0;
var limit = 10; // limit of the number guessing range

/*
  Init()
  Initialise the game
*/
function Init() {
    //generate a random number to guess
    number = Math.floor((Math.random() * limit) + 1);

    document.getElementById('output').innerHTML = 'I am thinking of a number between 1 and ' + limit + '...';

    //Remove the start button and make the input visible
    document.getElementById('start').classList.add("hidden");
    document.getElementById('input').classList.remove("hidden");

}


/*
  Game()
  Checks if the entered number is correct
  @param number guess - the input value
*/
function Game(guess) {
    if (guess == number) {

        document.getElementById('output').innerHTML = 'You guessed it! Hit Start to play again.';
        //Show button again and make input hidden
        document.getElementById('start').classList.remove("hidden");
        document.getElementById('input').classList.add("hidden");

    } else {
        //Print hint to the number
        var high_or_low = (number > guess) ? 'higher!' : 'lower!';
        document.getElementById('output').innerHTML = guess + ' is not the number. It is ' + high_or_low;
    }
}

/*
  eventHandler()
  Check if input is the enter key
  Used for passing the input to Game()
*/
function eventHandler() {
    if (this.event.which === 13) {
        Game(document.getElementById('input').value);
        document.getElementById('input').value = "";
    }
}
