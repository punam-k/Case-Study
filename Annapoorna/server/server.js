const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path');

const api = require('./routes/api');
const itemRouter = require('./routes/product.route');
const cartRouter = require('./routes/cart.route');
const orderRouter = require('./routes/order.route');
const port = 3000;

const app = express();
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());


app.use(express.json());
app.use('/api', api);
app.use('/food', itemRouter);
app.use('/cart', cartRouter);
app.use('/order', orderRouter);



app.listen(port, function() {
    console.log("Server running on localhost:" + port);
});



//mongoose connection
mongoose.connect('mongodb://localhost:27017/productDb')
mongoose.connection.on("connected", () => {
    console.log('connected to mongodb port 27017')
})
mongoose.connection.on('error', (error) => {
    console.log(error)
})