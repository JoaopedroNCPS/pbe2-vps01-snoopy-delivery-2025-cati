const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const pedido = await prisma.pedido.create({
            data: {
                motoristaId: req.body.motoristaId,
                data: new Date(req.body.data),
                produto: req.body.produto,
                valor: req.body.valor,
                endereco: req.body.endereco,
                numero: req.body.numero,
                cep: req.body.cep,
                complemento: req.body.complemento
            }
        });
        res.status(201).json(pedido).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
};

const read = async (req, res) => {
    const pedidos = await prisma.pedido.findMany({
        include: { motorista: true }
    });
    res.json(pedidos);
};

const readOne = async (req, res) => {
    const pedido = await prisma.pedido.findUnique({
        where: {
            id: Number(req.params.id)
        },
        include: {
            motorista: true
        }
    });
    res.json(pedido);
};

const update = async (req, res) => {
    try {
        const pedido = await prisma.pedido.update({
            where: { id: Number(req.params.id) },
            data: {
                motoristaId: req.body.motoristaId,
                data: new Date(req.body.data),
                produto: req.body.produto,
                valor: req.body.valor,
                endereco: req.body.endereco,
                numero: req.body.numero,
                cep: req.body.cep,
                complemento: req.body.complemento
            }
        });
        res.status(202).json(pedido).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
};

const remove = async (req, res) => {
    try {
        const pedido = await prisma.pedido.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(204).json(pedido).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
};

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
};
