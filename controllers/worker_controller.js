const Worker = require('../models/workers');


module.exports.home= function(req, res){
    return res.render('worker_home', {
        title:"foocheck boiii"
    })
}

module.exports.profile= function(req, res){
    return res.render('worker_profile', {
        title:"foocheck boiii"
    });
}

module.exports.sign_up= function(req,res){
    return res.render('worker_sign_up',{
        title:"user sign-up"
    } );
}

module.exports.sign_in = function(req, res){
    return res.render('worker_sign_in', {
        title:"user sign-in"
    })
}

module.exports.create= function(req, res){

    if(req.body.password != req.body.confirm_password){
        console.log("the password and the confirm-password are not matching");
        return res.redirect("/workers/sign-up");
    }

    Worker.findOne({email:req.body.email}, function(err, wrkr){

        if(err){
            console.log("there was a error in finding the worker in database during create session");
            return res.redirect('back');
        }
        if(!wrkr){
            Worker.create(req.body, function(err, wrkr){
                if(err){
                    console.log("there was an error in registering the user");
                    res.redirect('back');
                }
                else {
                    console.log("The user has been created and added in the database");
                    return res.redirect('/workers/sign-in');

                }


            })
        
            
        }
        else{
            console.log("A user with this email already exists");
            return res.redirect('/workers/sign-up');
        }
    })

}

module.exports.create_session = function(req, res){
    
    return res.redirect("/");

}

module.exports.destroy_session = function(req,res){
    req.logout();
    return res.redirect('/');

}