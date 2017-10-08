window.onload = function () {

//Array of possible guesses
  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


  var categories ;        		// Array of topics
  var chosenCategory;     		// Selected category
  var word ;              		// Selected word
  var userGuess ;             	// Guess
  var pastGuesses = [ ];      	// Stored guesses
  var tries ;             		// Tries
  var counter ;           		// Count correct guesses
  var space;              		// Number of spaces in word '-'


//Get elements

  var showTries = document.getElementById("mytries");
  var showCategory = document.getElementById("categoryName");
  var letterClick = false;

//Create alphabet list
	var buttons = function () {
		myButtons = document.getElementById('buttons');
		letters = document.createElement('ul');
        

	for (var i = 0; i < alphabet.length; i++) {
		letters.id = 'alphabet';
		list = document.createElement('li');
		list.id = 'letter';
		list.innerHTML = alphabet[i];
		check();
		myButtons.appendChild(letters);
		letters.appendChild(list);
		}
	}

//Select category

  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      categoryName.innerHTML = "Category: Actors";
    } else if (chosenCategory === categories[1]) {
      categoryName.innerHTML = "Category: Films";
    } else if (chosenCategory === categories[2]) {
      categoryName.innerHTML = "Category: Genres";
    }
  }

//Create guesses list
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = " _ ";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);

    }
  }

//Show tries
   comments = function () {
    showTries.innerHTML = "You have " + tries + " attempts remaining";
    if (tries < 1) {
      showTries.innerHTML = "Two thumbs way way down!";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showTries.innerHTML = "And the Academy Award goes to you!";

      }
    }
  }

//Functions (.onclick)

   check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
          console.log(guess);  //this is only logging to the console the correct guesses, why?
        } 
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        tries -= 1;
        comments();
      } else {
        comments();
       
      }
    }

}

// when game starts, letterClick = false, after guesses, letterClick = true, if true, hide the letter 

//Play and counter

 play = function () {
    categories = [
		 ["AUDREY HEPBURN", "MARILYN MONROE", "JAMES STEWART", "FRED ASTAIRE", "JUDY GARLAND", "DEBBIE REYNOLDS", "HUMPHREY BOGART", "ERROL FLYNN"],
		 ["CITIZEN KANE", "PHILADELPHIA STORY", "ROMAN HOLIDAY", "MALTESE FALCON", "AFRICAN QUEEN", "REAR WINDOW", "CASABLANCA", "STAGECOACH"],
		 ["THRILLER", "WESTERN", "SILENT", "COMEDY", "ACTION", "INDEPENDENT", "FOREIGN", "DRAMA"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [ ];
    tries = 8;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
  }

  play();

//Make gif appear at W/L

//Reset

 document.getElementById("reset").onclick = function() {
    location.reload();
}

//  document.getElementById('reset').onclick = function() {
//	correct.parentNode.removeChild(correct);
//    tries.parentNode.removeChild(tries);
//    play();
// }

};

//Things to still do:
// Make the buttons change colors once they've been pressed.  Or just disappear.  
// Style and get the reset to work -- got it to refresh, but I'm thinking that's not what we wanted
// change all the letters and inputs to upperCase -- ok to hard code this because it's a click event, not a key-up
// make an image appear on a win/loss?