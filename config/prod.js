// prod.js - productions keys here

module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret:  process.env.GOOGLE_CLIENT_SECRET,
    googleRedirectURI: 'https://thawing-fjord-37048.herokuapp.com/auth/google/callback',
    facebookClientID: process.env.FACEBOOK_CLIENT_ID,
    facebookClientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    facebookRedirectUri: 'https://thawing-fjord-37048.herokuapp.com/auth/facebook/callback',
    mongoURI: process.env.MONGO_URI,
    cookieKey:  process.env.COOKIE_KEY
};