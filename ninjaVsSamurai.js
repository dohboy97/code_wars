var Warrior = function(name){
    this.name = name;  
    this.health = 100;
    this.strike = function(enemy, swings){
    enemy.health = Math.max(0, enemy.health - (swings * 10));   
  }
  }
  
  
  
  
  
  var ninja = new Warrior('Ninja');
  var samurai = new Warrior('Samurai');
  console.log(ninja)
  samurai.strike(ninja, 3);
  console.log(ninja.health)