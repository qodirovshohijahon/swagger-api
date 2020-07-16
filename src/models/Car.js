const mongoose = require('mongoose')
const schema = mongoose.Schema;
const carSchema = new mongoose.Schema({
    title: String,
    brand: String,
    price: String,
    age: Number,
    services: {
        type: Map,
        of: String
    }
});

module.exports = mongoose.model('Car', carSchema)