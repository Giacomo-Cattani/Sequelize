import { Episode } from '../models/episodes.model.js';
import { Podcast } from '../models/podcast.model.js';

// Create a new episode

export const createEpisode = async (req, res) => {
    try {
        const { Title, Description, CreationDate, Fk_Podcast } = req.body;

        // Check if the podcast exists
        const podcast = await Podcast.findByPk(Fk_Podcast);
        if (!podcast) {
            return res.status(404).json({ error: 'Podcast not found' });
        }

        // Create the episode
        const episode = await Episode.create({
            Title,
            Description,
            CreationDate,
            Fk_Podcast,
        });

        return res.status(201).json(episode);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
    }
};

// Get all episodes
export const getAllEpisodes = async (req, res) => {
    try {
        const episodes = await Episode.findAll();
        return res.status(200).json(episodes);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
    }
};

// Get a single episode by ID
export const getEpisodeById = async (req, res) => {
    try {
        const { id } = req.params;

        const episode = await Episode.findByPk(id);
        if (!episode) {
            return res.status(404).json({ error: 'Episode not found' });
        }

        return res.status(200).json(episode);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
    }
};

// Update an episode
export const updateEpisode = async (req, res) => {
    try {
        const { id } = req.params;
        const { Title, Description, CreationDate, Fk_Podcast } = req.body;

        // Check if the episode exists
        const episode = await Episode.findByPk(id);
        if (!episode) {
            return res.status(404).json({ error: 'Episode not found' });
        }

        // Check if the podcast exists
        const podcast = await Podcast.findByPk(Fk_Podcast);
        if (!podcast) {
            return res.status(404).json({ error: 'Podcast not found' });
        }

        // Update the episode
        await episode.update({
            Title,
            Description,
            CreationDate,
            Fk_Podcast,
        });

        return res.status(200).json(episode);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
    }
};

// Delete an episode
export const deleteEpisode = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if the episode exists
        const episode = await Episode.findByPk(id);
        if (!episode) {
            return res.status(404).json({ error: 'Episode not found' });
        }

        // Delete the episode
        await episode.destroy();

        return res.status(204).json();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
    }
};

const episodesController = {
    createEpisode,
    getAllEpisodes,
    getEpisodeById,
    updateEpisode,
    deleteEpisode,
};

export default episodesController;
