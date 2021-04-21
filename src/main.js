//Kendrick Le, Modded Rocket Patrol, 4/21/2021
// started the project at 2am today, achieved projected 100 points by 10am (~8 hours)
// Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
    // new background, new sprites for spaceships to fish, new sprite for rocket to net, new text to add flavour, new sounds to fit everything
    // adjusted ui to fit theme.
// Implement a simultaneous two-player mode (30)
    // created new scene for simultaneous  2 play mode with seperate score keeps and controls (ad and w for player 1, arrow keys for 2)
//Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)
    // new bird sprite added that zooms across the top of the screen, worth 60 points and is smaller than the fish
// total points: 110 (should be able to compensate if the 60 point falls short from qualifying)

// Adam Smith office hours today at 10 really helped with some issues
// phaser tutorials from youtube channel Luis Zuno provided the music config in Menu.js, as well as ovrall help of concepts.


// sets the dimensions of the play space
let config = {
    type: Phaser.CANVAS,
    width:640,
    height:480,
    scene: [Menu, Play, twoPlay]
}
let game = new Phaser.Game(config);

// reserve keyboard vars
let keyUP, keyR, keyLEFT, keyRIGHT, keyA, keyD, keyW, keyONE, keyTWO;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;




