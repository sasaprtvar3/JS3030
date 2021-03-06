/**
 * @file
 * This assignment has you extending the Game class defined in 3.1.  You'll
 * overwrite two of the functions to include a third game called, 'tanks'.
 * 
 * To do this, you'll need to author over the Game.receiveInput and 
 * Game.gameOptions functions.
 * 
 */

var Game = require(__dirname + '/../3.1-classes_as_containers.js');
Game.oldReceiveInput = Game.receiveInput;
Game.receiveInput = function(char) {
    Game.oldReceiveInput(char);
    if (char == 'c') {
        Game.enterGame('Tanks');
    }
}

Game.oldGameOptions = Game.gameOptions;
Game.gameOptions = function() {
    Game.oldGameOptions();

     gameOptions() {
        console.log('       a. spacecraft');
        console.log('       b. snake');
        console.log('       c. tanks');
        console.log('       x. back');
    }
}

Game.initilaize();