
const config = {
    type: Phaser.AUTO,
    with: 800,
    height: 600,
    scene: {
        preload,
        create,
        update
    }
}

function preload(){

    this.load.image('sky', 'assets/sky.png')
    this.load.image('ground', 'assets/ground.png')
    this.load.image('star', 'assets/star.png')
    this.load.image('bomb', 'assets/bomb.png')

    this.load.spritesheet('dude', 'assets/dude.png', {frameWidth: 32, frameHeigth : 48})
    
}

function create(){
    
}

function update(){
    
}


const game = new Phaser.Game(config)
