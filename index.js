// include express to set up the server
const express = require("express");
const port = 7999;
const app= express()

//set up the view engine
app.set('view engine','ejs');
app.set('views', './views');


//set up routers 
app.use('/', require('./routes'));


app.listen(port, function(err){
    if(err){
        console.log("The server is not able to run due to the error", err);
    }
    else{
        console.log(`the server is up and running on port ${port}`);
    }
})
