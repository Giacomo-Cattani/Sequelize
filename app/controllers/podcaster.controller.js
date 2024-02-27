import { Podcaster } from '../models/podcaster.model.js';

const podcasterController = {};

// Create a new podcaster
podcasterController.createPodcaster = async (req, res) => {
    try {
        const { Name, Surname, Username, BirthDate, Password, Email } = req.body;
        const podcaster = await Podcaster.create({
            Name,
            Surname,
            Username,
            BirthDate,
            Password,
            Email
        });
        res.status(201).json(podcaster);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get all podcasters
podcasterController.getAllPodcasters = async (req, res) => {
    try {
        const podcasters = await Podcaster.findAll();
        res.status(200).json(podcasters);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get a single podcaster by ID
podcasterController.getPodcasterById = async (req, res) => {
    try {
        const { id } = req.params;
        const podcaster = await Podcaster.findByPk(id);
        if (!podcaster) {
            return res.status(404).json({ error: 'Podcaster not found' });
        }
        res.status(200).json(podcaster);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update a podcaster by ID
podcasterController.updatePodcasterById = async (req, res) => {
    try {
        const { id } = req.params;
        const { Name, Surname, Username, BirthDate, Password, Email } = req.body;
        const podcaster = await Podcaster.findByPk(id);
        if (!podcaster) {
            return res.status(404).json({ error: 'Podcaster not found' });
        }
        await podcaster.update({
            Name,
            Surname,
            Username,
            BirthDate,
            Password,
            Email
        });
        res.status(200).json(podcaster);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a podcaster by ID
podcasterController.deletePodcasterById = async (req, res) => {
    try {
        const { id } = req.params;
        const podcaster = await Podcaster.findByPk(id);
        if (!podcaster) {
            return res.status(404).json({ error: 'Podcaster not found' });
        }
        await podcaster.destroy();
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default podcasterController;
