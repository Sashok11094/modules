import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';

const characters = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'маг', health: 0},
    {name: 'лучник', health: 0},
  ];
  
  const alive = characters.filter(item => item.health > 0);

const game = new Game();
game.start();

console.log('app worked');