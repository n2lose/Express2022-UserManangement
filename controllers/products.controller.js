const db = require('../db');
let products = db.get('products').value();
let perPage = 9;
let totalProducts = db.get('products').size().value();
let size = Math.ceil(totalProducts / perPage);

module.exports.index = (req, res) => {
    let page = parseInt(req.query.page) || 1;
    let action = req.query.action;
    let perPage = 9;
    if(action === 'prev') {
       if(page === 1) return;
       page = page - 1;
    } 
    
    if(action === 'next') {
        if(page === size ) return;
        page = page + 1;
    } 
    
    let start = (page -1) * perPage;
    let end = page * perPage;
    res.render('products/index', {
        products: products.slice(start, end),
        size: size,
        page : page,
        action: action
    });
};