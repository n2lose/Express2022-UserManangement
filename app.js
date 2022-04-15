require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const auth = require('./middleware/auth.middleware');

const userRoutes = require('./routes/user.route');
const authRoutes = require('./routes/auth.route');
const productsRouter = require('./routes/products.route')


const port = 4000;

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/users', auth.requiredAuthenticate, userRoutes);
app.use('/auth', authRoutes);
app.use('/products', productsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})