
// Creates a class Menu that is a child of the object Scene
// Constructor calls the Object Scene to construct the Menu
class Menu extends Phaser.Scene {
    constructor () {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/assets_blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/assets_explosion38.wav');
        this.load.audio('sfx_rocket', './assets/assets_rocket_shot.wav');
      }

    create() {
        this.add.text(20,20, "Rocket Patrol Menu");
        this.scene.start("playScene");
    }
}