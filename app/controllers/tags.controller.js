import { Tag } from '../models/tags.model.js';

const tagsController = {
    // Create a new tag
    createTag: async (req, res) => {
        try {
            const { Nome } = req.body;
            const tag = await Tag.create({ Nome });
            res.status(201).json(tag);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create tag' });
        }
    },

    // Get all tags
    getAllTags: async (req, res) => {
        try {
            const tags = await Tag.findAll();
            res.status(200).json(tags);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch tags' });
        }
    },

    // Get a single tag by ID
    getTagById: async (req, res) => {
        try {
            const { id } = req.params;
            const tag = await Tag.findByPk(id);
            if (tag) {
                res.status(200).json(tag);
            } else {
                res.status(404).json({ error: 'Tag not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch tag' });
        }
    },

    // Update a tag by ID
    updateTagById: async (req, res) => {
        try {
            const { id } = req.params;
            const { Nome } = req.body;
            const tag = await Tag.findByPk(id);
            if (tag) {
                await tag.update({ Nome });
                res.status(200).json(tag);
            } else {
                res.status(404).json({ error: 'Tag not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to update tag' });
        }
    },

    // Delete a tag by ID
    deleteTagById: async (req, res) => {
        try {
            const { id } = req.params;
            const tag = await Tag.findByPk(id);
            if (tag) {
                await tag.destroy();
                res.status(204).end();
            } else {
                res.status(404).json({ error: 'Tag not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete tag' });
        }
    },
};

export default tagsController;
