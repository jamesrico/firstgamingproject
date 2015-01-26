 function Game(numberOfPlayers){
  this.weapons = [];
  this.weapons.push(new Weapon({name: 'Sword', damage: 0.2, ammo: Infinity}));
  this.weapons.push(new Weapon({name: 'Shotgun', damage: 0.6, ammo: 1}));
  this.weapons.push(new Weapon({name: 'Fist', damage: 0.05, ammo: Infinity}));
  this.players = [];

  for (var i=0; i < numberOfPlayers; i++){
    var player = new Player({name: 'Player' + (i + i)};
    player.weapon = getRandomWeapon(this.weapons);
    this.players.push(player);
  }

  function getRandomWeapon(weaponList){
    return weaponList[getRandomInt(0, weaponList.length)];
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

function Player(obj){
  this.name = obj && obj.name || 'Player';
  this.health = 1;
  this.isZombie = false;
  this.isTrulyDead = false;
  this.dexterity = 0.5;
}

Player.prototype.attack = function(otherPlayer){
  if (didHit(this.weapon.accuracy)) {
    otherPlayer.health -= this.weapon.damage;
  }
};

function Weapon(obj){
  this.name = obj.name;
  this.damage = obj.damage;
  this.accuracy = 1 - obj.damage;
  this.ammo = obj && obj.ammo || 0;
}

function didHit(accuracy){
  return accuracy > Math.random();
}

console.log(JSON.stringify(new Game(4), null, 2));

//wanted to add a number to the player name
	on line 9 add {name: 'Player' + ++i});
//this breaks because it is incrementing i
 	on line 9 add {name: 'Player' + (i + i)};
 	// to get random order of players add
 	var game.players = _.shuffle(game.players)
 	//^^ Be sure you
 	var _ = require('lodash');
 	//now you want to attack
 	you would like a fight fn so place it in the game object. how? through the prototype. 
 	Game.prototype.fight = function(){};
 	//instead of for loops, using array methods, for loop at line 10 because there is no array
 	//now that you have an array of players forEach
 	//access the players inside the game thru
 		this.players.forEach()
 	//all functional array takes a call back so 
 		this.players.forEach(function(player, i){
 			var nextPlayer = players[i + 1] || players[0]
 			player.attack(attack.Index)
 		 		}}; };
 	//There was an error in terminal 
 	var _ = require('lodash');

function Game(numberOfPlayers){
  this.weapons = [];
  this.weapons.push(new Weapon({name: 'Sword', damage: 0.2, ammo: Infinity}));
  this.weapons.push(new Weapon({name: 'Shotgun', damage: 0.6, ammo: 1}));
  this.weapons.push(new Weapon({name: 'Fist', damage: 0.05, ammo: Infinity}));
  this.players = [];

  for (var i=0; i < numberOfPlayers; i++){
    var player = new Player({name: 'Player' + (i + 1)});
    player.weapon = getRandomWeapon(this.weapons);
    this.players.push(player);
  }

  function getRandomWeapon(weaponList){
    return weaponList[getRandomInt(0, weaponList.length)];
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

function Player(obj){
  this.name = obj && obj.name || 'Player';
  this.health = 1;
  this.isZombie = false;
  this.isTrulyDead = false;
  this.dexterity = 0.5;
}

Player.prototype.attack = function(otherPlayer){
  if (didHit(this.weapon.accuracy)) {
    otherPlayer.health -= this.weapon.damage;
  }
};

function Weapon(obj){
  this.name = obj.name;
  this.damage = obj.damage;
  this.accuracy = 1 - obj.damage;
  this.ammo = obj && obj.ammo || 0;
}

function didHit(accuracy){
  return accuracy > Math.random();
}

Game.prototype.fight = function(){
  this.players.forEach(function(player, i){
    console.log(this.players);
    console.log(this.players[i+1]);
    var nextPlayer = this.players[i+1] || this.players[0];
    player.attack(nextPlayer);
  });
};

var game = new Game(4);
game.players = _.shuffle(game.players);
game.fight();

console.log(JSON.stringify(game, null, 2));

//// but the following error occurs:

/Users/Spydeeeee/Desktop/firstgamingproject/app.js:53
    console.log(this.players[i+1]);
                            ^
TypeError: Cannot read property '1' of undefined
    at /Users/Spydeeeee/Desktop/firstgamingproject/app.js:53:29
    at Array.forEach (native)
    at Game.fight (/Users/Spydeeeee/Desktop/firstgamingproject/app.js:51:16)
    at Object.<anonymous> (/Users/Spydeeeee/Desktop/firstgamingproject/app.js:61:6)
    at Module._compile (module.js:456:26)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Function.Module.runMain (module.js:497:10)
    at startup (node.js:119:16)
Spydeeeees-MacBook-Pro:firstgamingproject Spydeeeee$ 

///////

//////so rather than doing this.players pass them playersArray but there is way too many console logs and now in the game fight function

////

Game.prototype.fight = function(){
  this.players.forEach(function(player, i, playersArray){
    var nextPlayer = playersArray[i+1] || playersArray[0];
    player.attack(nextPlayer);
  });
};

///// then you wanted to loop the fights and shuffle the orders of the fights to change who to battle

Game.prototype.fight = function(){
  this.players.forEach(function(player, i, playersArray){
    var nextPlayer = playersArray[i+1] || playersArray[0];
    player.attack(nextPlayer);
  });
  return this;
};

Game.prototype.shufflePlayerOrder = function(){
  this.players = _.shuffle(this.players);
  return this;
}

var game = new Game(4);
game
  .shufflePlayerOrder()
  .fight()
  .shufflePlayerOrder()
  .fight()
  .shufflePlayerOrder()
  .fight();

console.log(JSON.stringify(game, null, 2));

/////////now if someone dies in the array how to remove them from the fight

//game fight function and hit (do not go to the var next player because you would like perform the function before) so create a new Index

//filter the array by rounding to four decimals, b/c the math.round function uses integers than you multiply and divide by a large number

    playersArray.filter(function(player){
      return Math.round(player.health * 1000)/1000 <= 0
    })
//// this created a new array so how to get that information and because you would like to use it again create a var
  var playerIndex = alivePlayersArray.indexOf(player);

    if (playerIndex !== -1) {
      var nextPlayer = alivePlayersArray[playerIndex+1] || alivePlayersArray[0];
      player.attack(nextPlayer);
    }

 ///// this didnt do anything to the health so why 
 ///to diagnose console.log(playerIndex) and the alive in the fight function, console.log(player), 
 ///the filter inside of forEach with the exact same array may be better to chain them

 Game.prototype.fight = function(){
  this.players.filter(function(player){
      return Math.round(player.health * 1e4)/1e4 <= 0;
    })
    .forEach(function(player, i, alivePlayersArray){
      var playerIndex = alivePlayersArray.indexOf(player);

      if (playerIndex !== -1) {
        var nextPlayer = alivePlayersArray[playerIndex+1] || alivePlayersArray[0];
        player.attack(nextPlayer);
      }
  });
  return this;
};

//////but the same issue occurs. check the filter function again by variablizing it to x then console.log(x) <<<<<< place that in the round function.
//////so console log the player index to debug


Game.prototype.fight = function(){
  var x = this.players.filter(function(player){
      return Math.round(player.health * 1e4)/1e4 <= 0;
    })



    x.forEach(function(player, i, alivePlayersArray){
      var playerIndex = alivePlayersArray.indexOf(player);
      console.log(playerIndex);

      if (playerIndex !== -1) {
        var nextPlayer = alivePlayersArray[playerIndex+1] || alivePlayersArray[0];
        player.attack(nextPlayer);
      }
  });

  return this;
};


//////////

Game.prototype.fight = function(){
  this.alivePlayers
    .forEach(function(player, i, alivePlayersArray){
      var playerIndex = alivePlayersArray.indexOf(player);
      console.log(playerIndex);

      if (playerIndex !== -1) {
        var nextPlayer = alivePlayersArray[playerIndex+1] || alivePlayersArray[0];
        player.attack(nextPlayer);
      }
  });

  return this;
};

Game.prototype.shufflePlayerOrder = function(){
  this.players = _.shuffle(this.players);
  return this;
}

Game.prototype.shuffleAndFight = function(){
  return this
    .shufflePlayerOrder()
    .fight();
}

Game.prototype.alivePlayers = function(){
  return this.players.filter(function(player){
    return Math.round(player.health * 1e4)/1e4 >= 0;
  })
}

Game.prototype.fightToTheDeath = function(){
  while (this.alivePlayers().length
}

var game = new Game(4);
game
  .shuffleAndFight()
  .shuffleAndFight()
  .shuffleAndFight()
  .shuffleAndFight();

console.log(JSON.stringify(game, null, 2));

/////////////

Game.prototype.fight = function(){
  this.alivePlayers()
    .forEach(function(player, i, alivePlayersArray){
      var playerIndex = alivePlayersArray.indexOf(player);
      console.log(playerIndex);

      if (playerIndex !== -1) {
        var nextPlayer = alivePlayersArray[playerIndex+1] || alivePlayersArray[0];
        player.attack(nextPlayer);
      }
  });

  return this;
};

Game.prototype.shufflePlayerOrder = function(){
  this.players = _.shuffle(this.players);
  return this;
}

Game.prototype.shuffleAndFight = function(){
  return this
    .shufflePlayerOrder()
    .fight();
}

Game.prototype.alivePlayers = function(){
  return this.players.filter(function(player){
    return Math.round(player.health * 1e4)/1e4 >= 0;
  })
}

Game.prototype.fightToTheDeath = function(){
  while (this.alivePlayers().length > 1) {
    this.shuffleAndFight();
  }
}

var game = new Game(4);
game.fightToTheDeath();

console.log(JSON.stringify(game, null, 2));

///////work through the debugging


