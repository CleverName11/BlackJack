const game = require("../services/game");

module.exports = (app) => {
  app.get("/api/game/new", (req, res) => {
    const results = game.newGame();
    res.send(results);
  });

  app.get("/api/game/hit", (req, res) => {
    res.send(game.hit());
  });
};
