const db = require('../db');

let products = db.get('products').value();
module.exports.index = (req, res) => {
    let page = parseInt(req.query.page) || 1;
    let perPage = 9;
    let start = (page -1) * perPage;
    let end = page * perPage;
    res.render('products/index', {
        products: products.slice(start, end)
    });
};
