
  var levelData = { 
     1:  [[0,0,1,0,0,0,0,0,0,1,0],
          [0,0,0,2,0,0,0,0,2,0,0],
          [0,0,0,0,1,0,0,1,0,0,0],
          [0,0,0,0,0,2,2,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]],
     2:  [[0,0,0,1,0,0,1,0,0,0,0],
          [0,0,0,0,2,2,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [2,0,1,0,2,0,1,0,2,0,1],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,1,1,1,1,1,1,1,1,0]],
      3: [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,1,0,0,0,0,0,1,0,0],
          [0,0,0,1,0,0,0,1,0,0,0],
          [0,0,1,1,1,1,1,1,1,0,0],
          [0,1,1,0,1,1,1,0,1,1,0],
          [1,1,1,1,1,1,1,1,1,1,1],
          [1,0,1,1,1,1,1,1,1,0,1],
          [1,0,1,0,0,0,0,0,1,0,1],
          [0,0,0,1,1,0,1,1,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]]
  
  
   };

  var spriteData = {
    'alien1': { sx: 0,  sy: 0,  w: 33, h: 28, cls: Alien, frames: 2 },
    'alien2': { sx: 0,  sy: 18, w: 33, h: 28, cls: Alien, frames: 2 },
    'player': { sx: 0,  sy: 55, w: 60, h: 47, cls: Player },
    'missile': { sx: 104,  sy: 91, w: 4,  h: 14, cls: Missile } ,
    'missile2': { sx: 124,  sy: 84, w: 10,  h: 14, cls: Missile }
  }

  function startGame() {
      
    var screen = new GameScreen("Galaxy Wars","press space bar to begin your mission, good luck",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
    Game.loop();
  }

var snd = new Audio("Beyond-Remix.mp3"); // buffers automatically when game is loaded
snd.play();


  function endGame() {
    var screen = new GameScreen("Crictical Damage","press space bar to restart",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }


  function winGame() {
    var screen = new GameScreen("Mission Complete","press space bar to restart",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }
//change the audio below
  $(function() {
    GameAudio.load({ 'fire' : 'media/laser.ogg', 'die' : 'media/explosion.ogg' }, 
                   function() { 
                       Game.initialize("#gameboard", levelData, spriteData,
                                      { "start": startGame,
                                        "die"  : endGame,
                                        "win"  : winGame });
                   });
   });



