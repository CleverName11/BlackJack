const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const keys = require("./config/keys");

//simply requiring something tells this file that it needs to "use" it every time
require("./models/users");
require("./services/passport");

//connects to the DB
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

//cookies last 30 days
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

//enables the app to see the route files
require("./routes/authRoutes")(app);
require("./routes/gameRoutes")(app);

//gets the port from Heroku if in production or sets it to 5000 if in development
const PORT = process.env.PORT || 5000;
app.listen(PORT);
