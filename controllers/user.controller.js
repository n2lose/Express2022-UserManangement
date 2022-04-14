const db = require('../db');

let users = db.get('users').value();

module.exports.index = (req, res) => {
    res.render('users/index', {
        users: db.get('users').value()
    })
};

module.exports.search = (req, res) => {
    let q = req.query.q;
    let matchedUsers = users.filter(user => user.name.indexOf(q.toLocaleLowerCase()) !== -1);
    res.render('users/index', {
        users: matchedUsers
    });
};

module.exports.create = (req, res) => {
    res.render('users/create');
}

module.exports.getUserDetails = (req, res) => {
    let userId = parseInt(req.params.id);
    let user = db.get('users').find({id: userId}).value();
    res.render('users/view', {
        user: user
    });
}

module.exports.postCreateUser = (req, res) => {

    let newuser = {
        "id": users.length +1,
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email
    };
    db.get('users').push(newuser).write();
    res.redirect('/users');
}