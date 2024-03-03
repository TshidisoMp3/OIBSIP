const Pizza = require('./pizza');
const Inventory = require('./inventory');
const Order = require('./order');


// get all pizzas
exports.getPizzas = async (req, res) => {
    try {
        const pizzas = await Pizza.find();
        res.status(200).json(pizzas);
    }
    catch (error) {
        res.status(500).json(error);
    }
};

// getting the individual pizza
exports.getPizza = async (req, res) => {
    try {
        const pizza = await Pizza.findById(req.params.id);
        res.status(200).json(pizza);
    }
    catch (error) {
        res.status(500).json(error);
    }
};

// add a pizza
exports.addPizza = async (req, res) => {
    const newPizza = new Pizza(req.body);
    try {
        const savedPizza = await newPizza.save();
        res.status(200).json(savedPizza);
    }
    catch (error) {
        res.status(500).json(error);
    }
};

// update a pizza
exports.updatePizza = async (req, res) => {
    try {
        const pizza = await Pizza.findById(req.params.id);
        if (pizza.userId === req.body.userId) {
            await pizza.updateOne({ $set: req.body });
            res.status(200).json('The pizza has been updated');
        }
        else {
            res.status(403).json('You can update only your pizza');
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
};

// delete a pizza
exports.deletePizza = async (req, res) => {
    try {
        const pizza = await Pizza.findById(req.params.id);
        if (pizza.userId === req.body.userId) {
            await pizza.deleteOne();
            res.status(200).json('The pizza has been deleted');
        }
        else {
            res.status(403).json('You can delete only your pizza');
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
};

// get all inventory
exports.getInventory = async (req, res) => {
    try {
        const inventory = await Inventory.find();
        res.status(200).json(inventory);
    }
    catch (error) {
        res.status(500).json(error);
    }
};

// getting the individual inventory
exports.getInventoryItem = async (req, res) => {
    try {
        const inventory = await Inventory.findById(req.params.id);
        res.status(200).json(inventory);
    }
    catch (error) {
        res.status(500).json(error);
    }
};

// add an inventory
exports.addInventory = async (req, res) => {
    const newInventory = new Inventory(req.body);
    try {
        const savedInventory = await newInventory.save();
        res.status(200).json(savedInventory);
    }
    catch (error) {
        res.status(500).json(error);
    }
};

// update an inventory
exports.updateInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findById(req.params.id);
        if (inventory.userId === req.body.userId) {
            await inventory.updateOne({ $set: req.body });
            res.status(200).json('The inventory has been updated');
        }
        else {
            res.status(403).json('You can update only your inventory');
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
};

// delete an inventory
exports.deleteInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findById(req.params.id);
        if (inventory.userId === req.body.userId) {
            await inventory.deleteOne();
            res.status(200).json('The inventory has been deleted');
        }
        else {
            res.status(403).json('You can delete only your inventory');
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
};
