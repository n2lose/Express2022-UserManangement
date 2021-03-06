const db = require('../db');

module.exports.requiredAuthenticate = (req, res, next) => {
    if(!req.cookies.userId) {
        res.redirect('/auth/login');
        return;
    }

    let user = db.get('users').find({id: parseInt(req.cookies.userId)}).value();
    
    if(!user) {
        res.redirect('/auth/login');
        return;
    }
    res.locals.user = user;
    next();
}