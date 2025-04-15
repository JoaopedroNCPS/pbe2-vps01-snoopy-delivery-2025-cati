const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const motorista = await prisma.motorista.create({
            data: req.body
        });
        res.status(201).json(motorista).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
};


const read = async (req, res) => {
    const motoristas = await prisma.motorista.findMany({
        include: { telefones: true }
    });
    res.json(motoristas);
};


const readOne = async (req, res) => {
    const motorista = await prisma.motorista.findUnique({
        where: {
            id: Number(req.params.id)
        },
        include: {
            telefones: true
        }
    });
    res.json(motorista);
};


const update = async (req, res) => {
    try {
        const motorista = await prisma.motorista.update({
            where: { id: Number(req.params.id) },
            data: {
                nome: req.body.nome,
                email: req.body.email

            }
        });
        res.status(202).json(motorista).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
};

const remove = async (req, res) => {
    try {
        const motorista = await prisma.motorista.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(204).json(motorista).end();
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