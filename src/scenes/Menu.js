
// Creates a class Menu that is a child of the object Scene
// Constructor calls the Object Scene to construct the Menu
class Menu extends Phaser.Scene {
    constructor () {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/pop.wav');
        this.load.audio('sfx_explosion', './assets/splash.wav');
        this.load.audio('sfx_rocket', './assets/woosh.wav');
        this.load.audio('novice', './assets/Novice.wav');
        this.load.audio('expert', './assets/Expert.wav');
        this.load.audio('music', './assets/plasterbrain.wav');
        
        this.load.image('starfield', './assets/ocean.png');
      }

    create() {
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);
        let menuConfig = {
            fontFamily: 'Papyrus',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
        fixedWidth: 0
      }

      let musicConfig = {
        mute: false,
        volume: 0.25,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: true,
        delay: 0
      }

      this.music = this.sound.add('music');
      this.music.play(musicConfig);
       
      // show menu text
      this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Neptune\'s Bounty ', menuConfig).setOrigin(0.5);
      this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, ' (F) to cast', menuConfig).setOrigin(0.5);
      this.add.text(game.config.width/2, game.config.height/2, 'Use ←→ arrows to move your net &', menuConfig).setOrigin(0.5);
      menuConfig.backgroundColor = '#00FF00';
      menuConfig.color = '#000';
      this.add.text(game.config.width/2, game.config.height/2 + borderUISize*2 + borderPadding*2, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);
      menuConfig.backgroundColor = '#0000FF';
      menuConfig.color = '#000';
      this.add.text(game.config.width/2, game.config.height/2 + borderUISize*3 + borderPadding*3, 'Press 1 for 1 Player', menuConfig).setOrigin(0.5);
      this.add.text(game.config.width/2, game.config.height/2 + borderUISize*4 + borderPadding*4, 'Press 2 for 2 Player', menuConfig).setOrigin(0.5);

      // define keys
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
      keyONE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
      keyTWO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);

        
    }

    update() {
    
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          this.sound.play('novice');
          game.settings = {
            spaceshipSpeed: 3,
            birdSpeed: 6,
            gameTimer: 60000    
          }
             
        }

        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          this.sound.play('expert');
          game.settings = {
            spaceshipSpeed: 4,
            birdSpeed: 8,
            gameTimer: 45000    
          }  
        }

        if(Phaser.Input.Keyboard.JustDown(keyONE)) {
          this.sound.play('sfx_select');
          this.scene.start('playScene'); 
        }
        if(Phaser.Input.Keyboard.JustDown(keyTWO)) {
          this.sound.play('sfx_select');
          this.scene.start('twoPlayScene'); 
        }
    

      }
}