const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortId = require('short-id');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/react-shopping-cart-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Product = mongoose.model("products", new mongoose.Schema({
        _id: { type: String, default: shortId.generate },
        title: String,
        description: String,
        image: String,
        price: Number,
        availableSizes: [String],
    })
);

app.get('/api/products', async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

app.post('/api/products', async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
});

app.delete('/api/products/:id', async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("serve at port: http://localhost:" + PORT));

