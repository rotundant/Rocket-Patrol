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