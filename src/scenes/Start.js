export class Start extends Phaser.Scene {
    constructor() {
        super('Start');
    }

    preload() {
        this.load.image('startBtn', "assets/start_button.png");
        this.load.image('title', "assets/title.png");
    }

    create() {
        //background color
        this.cameras.main.setBackgroundColor("#ffffff");

        //title 
        const title = this.add.image(400, 150, "title");
            title.setOrigin(0.5)
            title.setScale(0.5);

        const startButton = this.add.image(300, 300, "startBtn")
            .setOrigin(0.5)
            .setInteractive();

        startButton.on("pointerdown", () => {
            this.scene.start('GameScene');
        })
    }
    
}
