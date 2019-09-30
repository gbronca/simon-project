const colors = [];

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