const moongose = require('mongoose');
const Schema = moongose.Schema;

// user schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// emailService schema

const emailServiceSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

// Pizza Schema
const pizzaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

// Inventory Schema

const inventorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

// order schema

const orderSchema = new Schema({
    items: {
        type: Array,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

// Exporting the schemas

exports.User = moongose.model('User', userSchema);
exports.EmailService = moongose.model('EmailService', emailServiceSchema);
exports.Pizza = moongose.model('Pizza', pizzaSchema);
exports.Inventory = moongose.model('Inventory', inventorySchema);
exports.Order = moongose.model('Order', orderSchema);
