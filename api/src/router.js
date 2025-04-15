const express = require('express');
const router = express.Router();

const Motorista = require('./controllers/motorista');
const Telefone = require('./controllers/telefone');
const Pedido = require('./controllers/pedido');

router.get('/', (req, res) => {
    res.json({ titulo: 'SNOOPY PetShop Delivery API' });
});

router.post('/motoristas', Motorista.create);
router.get('/motoristas', Motorista.read);
router.get('/motoristas/:id', Motorista.readOne);
router.patch('/motoristas/:id', Motorista.update);
router.delete('/motoristas/:id', Motorista.remove);

router.post('/telefones', Telefone.create);
router.get('/telefones', Telefone.read);
router.get('/telefones/:id', Telefone.readOne);
router.patch('/telefones/:id', Telefone.update);
router.delete('/telefones/:id', Telefone.remove);

router.post('/pedidos', Pedido.create);
router.get('/pedidos', Pedido.read);
router.get('/pedidos/:id', Pedido.readOne);
router.patch('/pedidos/:id', Pedido.update);
router.delete('/pedidos/:id', Pedido.remove);

module.exports = router;
