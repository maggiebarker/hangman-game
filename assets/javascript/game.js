window.onload = function () {

//Array of possible guesses
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var categories = ["actors", "movies", "genres"];

  //var actors = ["audrey hepburn", "marilyn monroe", "morgan freeman", "anthony hopkins", "meryl streep", "keanu reeves", "lupita nyong'o", "chiwetel ejiofor"];
  //var movies = ["jurrassic park", "clue", "raiders of the lost ark", "great mouse detective", "imitation game", "tombstone"];
  //var genre =  ["disney", "western", "horror", "comedy", "action", "independent", "foreign", "drama"];

//Create alphabet list
	var buttons =function () {
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

//Get elements

  var showTries = document.getElementById("tries");
  var showCategory = document.getElementById("category");

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
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

//Show tries

//Functions (.onclick)

//Play and counter

//Make gif appear at W/L

//Reset

}