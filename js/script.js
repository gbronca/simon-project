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

// Event listener functions

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
  
function check() {
	if (playerSequence[playerSequence.length - 1] !== computerSequence[playerSequence.length - 1]) {
		counter.innerHTML = 'XX';
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
		round += 1;
		resetVariables();
		timerVariable = setInterval(play, 800);
	}
}