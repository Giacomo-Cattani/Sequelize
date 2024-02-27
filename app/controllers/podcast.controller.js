import { Podcast } from '../models/podcast.model.js';

// Create a podcast
export const createPodcast = async (req, res) => {
    try {
        const { name, description, createDate } = req.body;
        const podcast = await Podcast.create({ name, description, createDate });
        res.status(201).json(podcast);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get all podcasts
export const getAllPodcasts = async (req, res) => {
    try {
        const podcasts = await Podcast.findAll();
        res.status(200).json(podcasts);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get a podcast by ID
export const getPodcastById = async (req, res) => {
    try {
        const { id } = req.params;
        const podcast = await Podcast.findByPk(id);
        if (!podcast) {
            return res.status(404).json({ error: 'Podcast not found' });
        }
        res.status(200).json(podcast);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update a podcast
export const updatePodcast = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, createDate } = req.body;
        const podcast = await Podcast.findByPk(id);
        if (!podcast) {
            return res.status(404).json({ error: 'Podcast not found' });
        }
        podcast.name = name;
        podcast.description = description;
        podcast.createDate = createDate;
        await podcast.save();
        res.status(200).json(podcast);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a podcast
export const deletePodcast = async (req, res) => {
    try {
        const { id } = req.params;
        const podcast = await Podcast.findByPk(id);
        if (!podcast) {
            return res.status(404).json({ error: 'Podcast not found' });
        }
        await podcast.destroy();
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Export as podcastController
const podcastController = {
    createPodcast,
    getAllPodcasts,
    getPodcastById,
    updatePodcast,
    deletePodcast
};
export default podcastController