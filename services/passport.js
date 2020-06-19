const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GoogleClientID,
      clientSecret: keys.GoogleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        //this user already exists. Don't make them again
        console.log("user already exists!!");
        done(null, existingUser);
      } else {
        //user doesn't exist and needs to be added to the DB
        const user = await new User({
          googleId: profile.id,
          name: profile.name.givenName,
          wins: 0,
          losses: 0,
        }).save();
        done(null, user);
      }
    }
  )
);
