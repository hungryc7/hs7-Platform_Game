import 'phaser';
import OptionsScene from './OptionsScene';

let platforms
let player
let cursors
let stars
let score = 0;
let scoreText;
let gameOverText
let bombs
let gameOver = false;
 
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
 
  preload () {
    // load images
    this.load.image('sky', '../src/assets/game/sky.png');
    this.load.image('ground', '../src/assets/game/platform.png');
    this.load.image('star', '../src/assets/game/star.png');
    this.load.image('bomb', '../src/assets/game/bomb.png');
    this.load.spritesheet('dude', 
    '../src/assets/game/dude.png',
    { frameWidth: 32, frameHeight: 48 }
);
  }
 
  create () {
    this.add.image(400, 300, 'sky');

    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    player = this.physics.add.sprite(100, 450, 'dude');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    this.physics.add.collider(player, platforms);
  }
};