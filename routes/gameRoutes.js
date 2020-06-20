const game = require("../services/game");

module.exports = (app) => {
  //route starts a new game
  app.get("/api/game/new", (req, res) => {
    res.send(game.newGame());
  });

  //route doesn't do anything
  app.get("/game", (req, res) => {
    res.redirect("/api/game/new");
  });

  app.get("/api/game/hit", (req, res) => {
    res.send(game.hit());
  });
};
