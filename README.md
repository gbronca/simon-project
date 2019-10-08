# Simon Game

This is the second of five milestone projects for the Code Institute Bootcamp.

The game was build in HTML5/CSS3, with the logic of the game build in ES6.

The main focus of the project is the Javascript logic, although I was mindful of building a responsive design.

The game can be played on [Simon Game Project](https://gbronca.github.io/simon-project/)

## What is Simon game

Simon is an electronic game of memory skill invented by Ralph H. Baer and Howard J. Morrison, working for toy design firm Marvin Glass and Associates,[1] with software programming by Lenny Cope. The device creates a series of tones and lights and requires a user to repeat the sequence. If the user succeeds, the series becomes progressively longer and more complex. Once the user fails or the time limit runs out, the game is over.

For more information about the game, please visit the official game's [Wikipedia page](https://en.wikipedia.org/wiki/Simon_(game))

## Game Features

1. Power switch

    Power up the game. The game is only playable if the power is on. This is to mimic the battery-powered game from the '70s and '80s. If power is on when this is switched, the game turns off.

2. Strict switch

    The game doesn't allow any mistakes. If the player chooses the wrong colour, the game restarts.

3. Start button

    Starts the game. This button only works if power is on. Once the game starts, it changes to Reset, allowing the game to restart.

4. Center Display

    Display the current level being played.

## Technologies

The game is entirely developed in HTML 5, CSS 3 and Javascript ES6, with no assistance of JS libraries such as JQuery or styling libraries like Bootstrap.

## Styling

It makes use of CSS Flexbox to align items and make the page responsive.

### Switch buttons

The Power Switch and Strict Switch are designed by [Andreas Storm](https://codepen.io/andreasstorm) and the source code can be found [here](https://codepen.io/andreasstorm/pen/rKboqY)

## Tests

The game responsiveness and playability was tested on:

* Firefox for Mac;
* Chrome for Mac and iOS;
* Safari for Mac and iOS;
* Brave for iOS.

The HTML was validated by [W3C Markup Validation Service](https://validator.w3.org/)

CSS was validated by [The W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/validator)

JSS was validated by ESLint.

## Issues

* The audio files are only cached when they are first played, causing delays and on audio output. After some research and tests, I wasn't able to find a solution that would fix the problem.

## Deployment

The project was pushed to Github and hosted on [Github Pages](https://pages.github.com/)
