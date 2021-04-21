// Spaceship Prefab
class Bird extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,texture,frame,pointValue) {
        super(scene,x,y,texture,frame);
        scene.add.existing(this); //add existing scene
        this.points = pointValue; // store pointValue
        this.birdSpeed = game.settings.birdSpeed;       // pixels per frame
    }

    update() {
        //move spaceship left
        this.x -= this.birdSpeed;
        //wrap around from left edge to right edge
        if(this.x <= 0 - this.width) {
            this.reset();
        }
    }

    //position reset
    reset() {
        this.x = game.config.width;
    }
}