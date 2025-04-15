const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const telefone = await prisma.telefone.create({
            data: {
                numero: req.body.numero,
                motorista_id: req.body.motorista_id
            }
        });
        res.status(201).json(telefone).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
};

const read = async (req, res) => {
    const telefones = await prisma.telefone.findMany({
        include: { motorista: true }
    });
    res.json(telefones);
};

const readOne = async (req, res) => {
    const telefone = await prisma.telefone.findUnique({
        where: {
            id: Number(req.params.id)
        },
        include: {
            motorista: true
        }
    });
    res.json(telefone);
};

const update = async (req, res) => {
    try {
        const telefone = await prisma.telefone.update({
            where: { id: Number(req.params.id) },
            data: {
                numero: req.body.numero,
                motorista_id: req.body.motorista_id
            }
        });
        res.status(202).json(telefone).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
};

const remove = async (req, res) => {
    try {
        const telefone = await prisma.telefone.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(204).json(telefone).end();
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
