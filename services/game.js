const blackjack = require("engine-blackjack");
const actions = blackjack.actions;
const Game = blackjack.Game;

const game = new Game();

//clears the table and deals out a new game
exports.newGame = () => {
  game.dispatch(actions.restore());
  game.dispatch(actions.deal());
  console.log(game.getState());
  return game.getState();
};

exports.hit = () => {
  game.dispatch(actions.hit());
  return game.getState();
};
