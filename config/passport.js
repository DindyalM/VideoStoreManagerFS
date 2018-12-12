const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../helper/user/userhelper');
const config = require('../config/database');


module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = config.secret;

    passport.use(new jwtStrategy(opts, (jwt_payload, done) => {
        User.getUserById(jwt_payload.data._id, (err,user) => {
            if(err){
                console.log(jwt_payload.data._id);
             return done(err,false);
            }
            if(user){
                console.log(jwt_payload.data._id);
            return done(null, user);
            }
            else{
                console.log(jwt_payload.data._id);
                return done(null, false);
            }
        });
    }));
    passport.serializeUser(function(user, done) {
        done(null, user);
      });


}
