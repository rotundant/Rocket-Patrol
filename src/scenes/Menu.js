
// Creates a class Menu that is a child of the object Scene
// Constructor calls the Object Scene to construct the Menu
class Menu extends Phaser.Scene {
    constructor () {
        super("menuScene");
    }

    create() {
        this.add.text(20,20, "Rocket Patrol Menu");
        this.scene.start("playScene");
    }
}