const colors = [];
let power = false;
let timerVariable;

const counter = document.querySelector('.game-counter');
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

function playAudio(color) {
	const beep = document.querySelector(`audio[data-key="${color}"]`);
	beep.play();
	playColor(color);
}

startButton.addEventListener('click', () => {
	if (power) {
		startButton.innerHTML = 'Reset';
		start();
	}
});
  
