const Pizza = require('./modelSchema').Pizza;
const Inventory = require('./modelSchema').Inventory;
const Order = require('./modelSchema').Order;


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

// get inventory
exports.getInventory = async (req, res) => {
    try {
        const inventory = await Inventory.find();
        res.status(200).json(inventory);
    }
    catch (error) {
        res.status(500).json(error);
    }
}

// add inventory
exports.addInventory = async (req, res) => {
    try {
        const newInventory = new Inventory(req.body);
        await newInventory.save();
        res.status(200).json("Inventory added");
    }
    catch (error) {
        res.status(500).json(error);
    }
};

// update inventory
exports.updateInventory = async (req, res) => {
    try {
        await Inventory.findByIdAndUpdate(req.params.id, {
            $set: req.body
        });
        res.status(200).json("Inventory updated");
    }
    catch (error) {
        res.status(500).json(error);
    }
}

// delete inventory
exports.deleteInventory = async (req, res) => {
    try {
        await Inventory.findByIdAndDelete(req.params.id);
        res.status(200).json("Inventory deleted");
    }
    catch (error) {
        res.status(500).json(error);
    }

};


// update the order status
exports.updateOrderStatus = async (req, res) => {
    try {
        await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        });
        res.status(200).json("Order status updated");
    }
    catch (error) {
        res.status(500).json(error);
    }
}


