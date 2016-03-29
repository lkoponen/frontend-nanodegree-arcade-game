// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // Sets the initial location for this enemy
    this.x = x;
    this.y = y;

    // Sets the speed of this enemy
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // Creates a move variable where the Enemy will move at
    // width of one block multiplied by the speed set in the 
    // Enemy object instantiation
    move = dt * 100 * this.speed;

    // Updates the x-axis location of the Enemy object based
    // upon the move variable value
    this.x = this.x + move;

    // Checks for collision with player and sends player back
    // to start on impact
    if (this.x == player.x && this.y == player.y) {
        player.x = 200;
        player.y = 400;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    // The image/sprite for our player, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-princess-girl.png';

    // Sets the initial location for the player
    this.x = x;
    this.y = y;
}

// Creates an update() method in the Player prototype
Player.prototype.update = function() {
}

// Creates a render() method in the Player prototype
Player.prototype.render = function(){
    //Add the player sprite to the canvas
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

//Creates a handleInput() method in the Player prototype
Player.prototype.handleInput = function(key){
    switch(key) {
        case 'left':
            this.x = this.x - 101;
            break;
        case 'up':
            this.y = this.y - 82;
            break;
        case 'right':
            this.x = this.x + 101;
            break;
        case 'down':
            this.y = this.y + 82;
            break;
        default:
            break;
    } 
}


// Now instantiate your objects.
var enemy1 = new Enemy(-100, 100, 1);
var enemy2 = new Enemy(-100, 200, 2);
var enemy3 = new Enemy(-100, 300, 1);

// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1, enemy2, enemy3];

// Place the player object in a variable called player
var player = new Player(200, 400);


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
