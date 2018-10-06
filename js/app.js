// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 0;
    this.y = 0;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Creating a player class
class Player{
    // Constrcutor for Player class for initializing its properites
    constructor(){
        // Defining initial positions for Player
        this.positionX = 202;
        this.positionY = 408;
        this.sprite = 'images/char-horn-girl.png';
        // Variables for Player movement top/down and sideways 
        this.upDown = 83;
        this.leftRight = 101;
    }

    //Updating Player Position
    update(){

    }

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.positionX, this.positionY);
    }

    // This method handles palyer movements when the arrow keys are pressed on the keyboard.
    // The if blocls are used to define boundries to restrict palyer movements within game board
    handleInput(keyCode){
        switch(keyCode){
            case 'left':
                if(this.positionX > 0){
                    this.positionX -= this.leftRight;
                }
                break;
            case 'right':
                if(this.positionX < 404){
                    this.positionX += this.leftRight;
                }
                break;
            case 'up':
                if(this.positionY>0){
                    this.positionY -= this.upDown;
                }
                break;
            case 'down':
                if(this.positionY < 408){
                    this.positionY += this.upDown;
                }
                break;
        }
        // console.log(this.positionX + ' ' + this.positionY)
    }

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const enemy1 = new Enemy();
const enemy2 = new Enemy();
const enemy3 = new Enemy();

const allEnemies =[enemy1,enemy2,enemy3];

// Place the player object in a variable called player
const player = new Player();
// const enemy = new Enemy();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
