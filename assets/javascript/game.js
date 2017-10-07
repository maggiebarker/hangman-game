window.onload = function () {

//Array of possible guesses
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var categories ;        		// Array of topics
  var chosenCategory;     		// Selected category
  var word ;              		// Selected word
  var userGuess ;             	// Guess
  var pastGuesses = [ ];      	// Stored guesses
  var tries ;             		// Tries
  var counter ;           		// Count correct guesses
  var space;              		// Number of spaces in word '-'

// 	var categories = {
//		actors: ["audrey hepburn", "marilyn monroe", "morgan freeman", "anthony hopkins", "meryl streep", "keanu reeves", "lupita nyong'o", "chiwetel ejiofor"]
 // 	movies: ["jurrassic park", "clue", "raiders of the lost ark", "great mouse detective", "imitation game", "tombstone"];
  //	genres:  ["disney", "western", "horror", "comedy", "action", "independent", "foreign", "drama"];
	//}

//Get elements

  var showTries = document.getElementById("mytries");
  var showCategory = document.getElementById("categoryName");

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
      categoryName.innerHTML = "The Category Is Actors";
    } else if (chosenCategory === categories[1]) {
      categoryName.innerHTML = "The Category Is Movies";
    } else if (chosenCategory === categories[2]) {
      categoryName.innerHTML = "The Category Is Genres";
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
        guess.innerHTML = " _";
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
        } 
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        tries -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }

//Play and counter

 play = function () {
    categories = [
		 ["audrey hepburn", "marilyn monroe", "morgan freeman", "anthony hopkins", "meryl streep", "keanu reeves", "lupita nyongo", "chiwetel ejiofor"],
		 ["jurrassic park", "clue", "raiders of the lost ark", "great mouse detective", "imitation game", "tombstone"],
		 ["disney", "western", "horror", "comedy", "action", "independent", "foreign", "drama"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [ ];
    tries = 12;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
  }

  play();

//Make gif appear at W/L

//Reset

  document.getElementById('reset').onclick 

};

//document.getElementById("restart").onclick = setup;