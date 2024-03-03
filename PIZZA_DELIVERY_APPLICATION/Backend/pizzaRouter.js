const express = require('express');
const router = express.Router();
const pizzaController = require('./pizzaController');


// get all pizzas
router.get('/pizzas', pizzaController.getPizzas);

// getting the individual pizza
router.get('/pizzas/:id', pizzaController.getPizza);

// add a pizza
router.post('/pizzas', pizzaController.addPizza);

// update a pizza
router.put('/pizzas/:id', pizzaController.updatePizza);

// delete a pizza
router.delete('/pizzas/:id', pizzaController.deletePizza);

module.exports = router;
