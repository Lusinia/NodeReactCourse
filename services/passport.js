const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');
// passport encode user id from mongo to cookie
passport.serializeUser((user, done) => {
    done(null, user.id); // user.id is shortcut of _id from mongo
});
// passport receive cookies and decode
// them to id to find current user form mongo
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    })
});
// https://console.developers.google.com
passport.use(
    new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: keys.googleRedirectURI  //   or we can add  proxy: true  to use http everywhere
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
            // User exists!
            done(null, existingUser); // errorMessage, user
        } else {
            new User({ googleId: profile.id})
                .save()
                .then(user => done(null, user));
        }
    });
}));