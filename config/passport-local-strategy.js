const passport= require("passport");
const LocalStrategy= require('passport-local').Strategy;
const Worker= require('../models/workers');

passport.use(new LocalStrategy({

    usernameField:'email'
},
    function(email,password,done){
        Worker.findOne({email:email},function(err,user){
            // if there was an internal error in accessing the database
            if(err){
                console.log("there was an error accessing the worker database");
                return done(err);
            }
            //invalid username/password
            else if(!user ||( user.password != password)){
                return done(null, false);
            }
            //worker is present 
            else {
                return done (null, user);
            }


        })

}));


// if the sign in is authenticated this will save the user's id as a cookie using express-session so user can
// accessed later on 
passport.serializeUser( function(wrkr, done){
    return done(null, wrkr.id);
});


// to find the user once the user is signed in 
passport.deserializeUser(function(id, done){

    Worker.findById(id, function(err, wrkr){

        if(err){
            console.log("Error in deserializing in passport");
            return done(err);
        }
        return done(null, wrkr);
    })
});


// check if the user is signed in 
passport.checkAuthentication = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/workers/sign-in');
}

// sent the user to locals for views if the user is signed in 
passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user= req.user;
    }
    return next();
}

module.exports = passport;