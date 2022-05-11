const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelize = require('./utils/database');
const orders = require('./models/ordersModel' );
const products = require('./models/productsModel');
const cart = require('./models/cartModel');
const cartProducts = require('./models/cartProductsModel');
const users = require('./models/usersModel');
const categories = require('./models/categoriesModel'); 

var path = require('path');
/* app.use(express.static(path.join(__dirname, 'uploads'))); */
/*  app.use('/uploads', express.static('uploads'));  */
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use(bodyParser.urlencoded({
    extended: true}));
app.use(bodyParser.json());
var corsOptions = { origin: '*', optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions))

const usersRoute = require('./routes/usersRoute');
app.use("/users", usersRoute);
const ordersRoute = require('./routes/ordersRoute');
app.use("/orders", ordersRoute);
const productsRoute = require('./routes/productsRoute');
app.use("/products", productsRoute);
const cartRoute = require('./routes/cartRoute');
app.use("/cart", cartRoute);
const FilesRoute = require('./routes/filesRoute');
app.use(FilesRoute);

categories.hasMany(products, {foreignKey: 'categoryId'})
    products.belongsTo(categories); 
users.hasMany(cart,{foreignKey: 'userId'})
    cart.belongsTo(users); 
users.hasMany(orders,{as: 'userId',foreignKey: 'userId'})
    orders.belongsTo(users); 
products.hasMany(cartProducts,{foreignKey: 'productId'})
    cartProducts.belongsTo(products); 
cart.hasMany(cartProducts,{foreignKey: 'cartId'})
    cartProducts.belongsTo(cart); 
cart.hasMany(orders,{foreignKey: 'cartId'})
    orders.belongsTo(cart); 

sequelize.sync().then(result => {
    app.listen(5000);
}).catch(err => {
    // logger.log("error", "ERRR " + JSON.stringify(err))
})
