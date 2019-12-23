module.exports.home= function(req, res){
    return res.render('worker_home', {
        title:"foocheck boiii"
    })
}

module.exports.profile= function(req, res){
    return res.render('worker_profile', {
        title:"foocheck boiii"
    })
}