const computerSequence = new Array(20);
const colors = [];
const playerSequence = [];
let strictMode = false;
let power = false;
let round;
let count;
let timerVariable;
let player = true; // True: Computer, False: Human



const counter = document.querySelector('.game-counter');
const strictButton = document.querySelector('#strict');
const powerButton = document.querySelector('#power');
const startButton = document.querySelector('#start');

// Capture the ID names of the game colors and save it in the colors array
const queryColors = document.getElementById('colors');
for (let i = 0; i < queryColors.childElementCount; i += 1) {
	colors[i] = queryColors.children[i].id;
}

// lights up the colour played
function playColor(color) {
	const playedColor = document.querySelector(`div[id="${color}"]`);
	playedColor.classList.add('playing');
}

// play audio file every time a colour is pushed
function playAudio(color) {
	const beep = document.querySelector(`audio[data-key="${color}"]`);
	beep.play();
	playColor(color);
}

// removes the brightness of the played color
const colorPlayed = Array.from(document.querySelectorAll('.colors-size'));
colorPlayed.forEach((color) => {
	color.addEventListener('transitionend', (e) => {
		if (e.propertyName !== 'transform') return;
		e.target.classList.remove('playing');
	});
});

function play() {
	power = false; // prevent human player from clicking whilst computer plays
	if (count === round) {
		clearInterval(timerVariable);
		power = true;
		player = false;
	}

	if (player === true) {
		setTimeout(() => {
			playAudio(colors[computerSequence[count]]);
			count += 1;
		}, 200);
	}
}

function resetVariables() {
	count = 0;
	playerSequence.length = 0;
	counter.innerHTML = round;
	player = true;
}
  
function start() {
	// initialize variables to default state
	timerVariable = 0;
	round = 1;
	resetVariables();
  
	// generate computer game sequence
	for (let i = 0; i < computerSequence.length; i += 1) {
		computerSequence[i] = Math.floor(Math.random() * colors.length);
	}
  
	timerVariable = setInterval(play, 800);
}

// listen to control buttons (strict, start, power) change of status
strictButton.addEventListener('click', () => {
	if (strictButton.checked) {
		strictMode = true;
	} else {
		strictMode = false;
	}
});

startButton.addEventListener('click', () => {
	if (power) {
		startButton.innerHTML = 'Reset';
		start();
	}
});

powerButton.addEventListener('click', () => {
	if (powerButton.checked) {
		power = true;
		counter.innerHTML = '-';
	} else {
		power = false;
		startButton.innerHTML = 'Start';
		counter.innerHTML = '';
		clearInterval(timerVariable);
	}
});

// Executed if the player completes the game
function winGame() {
	counter.innerHTML = 'WIN!';
	setTimeout(() => {
		power = true;
		counter.innerHTML = '-';
		startButton.innerHTML = 'Start';
	}, 1600);
}

// Checks if the player executed the correct sequence and what happens after
function check() {
	if (playerSequence[playerSequence.length - 1] !== computerSequence[playerSequence.length - 1]) {
		counter.innerHTML = 'XX';
		power = false;
		clearInterval(timerVariable);
		setTimeout(() => {
			counter.innerHTML = round;
			if (strictMode) {
				start();
			} else {
				player = true;
				resetVariables();
				timerVariable = setInterval(play, 800);
			}
		}, 800);
	} else if (playerSequence.length === computerSequence.length) {
		winGame();
	} else if (round === playerSequence.length) {
		setTimeout(() => {
			timerVariable = setInterval(play, 800);
			round += 1;
			resetVariables();
		}, 600);
	}
}


function played(color) {
	if (power) {
	// finds the colour clicked by the player and adds
	// to the playerSequence array the color position in the colors array.
		const playedColor = color.srcElement.attributes.id.value;
		playerSequence.push(colors.indexOf(playedColor));
  
		playAudio(playedColor);
		check();
		if (playerSequence[playerSequence.length - 1] !== computerSequence[playerSequence.length - 1]) {
			setTimeout(() => {
			}, 800);
		}
	}
}

// event listener for game colours
const colorEvents = Array.from(queryColors.querySelectorAll('.colors-size'));
colorEvents.forEach(color => color.addEventListener('click', played));