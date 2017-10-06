window.onload = function () {

//Array of possible guesses
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

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

console.log(alphabet);

//Get elements

//Select category

//Create guesses list

//Show tries

//Functions (.onclick)

//Play and counter

//Make gif appear at W/L

//Reset

}