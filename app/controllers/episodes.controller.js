const { Episode, Podcast } = require('../models');

// Create a new episode
exports.createEpisode = async (req, res) => {
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
exports.getAllEpisodes = async (req, res) => {
    try {
        const episodes = await Episode.findAll();
        return res.status(200).json(episodes);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
    }
};

// Get a single episode by ID
exports.getEpisodeById = async (req, res) => {
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
exports.updateEpisode = async (req, res) => {
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
exports.deleteEpisode = async (req, res) => {
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
