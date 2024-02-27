const { EpTag } = require('../models');

// Create a new ep_tag
exports.create = async (req, res) => {
  try {
    const { Fk_Tags, Fk_Episode } = req.body;
    const ep_tag = await EpTag.create({ Fk_Tags, Fk_Episode });
    res.status(201).json(ep_tag);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all ep_tags
exports.getAll = async (req, res) => {
  try {
    const ep_tags = await EpTag.findAll();
    res.status(200).json(ep_tags);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a single ep_tag by Id
exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const ep_tag = await EpTag.findByPk(id);
    if (!ep_tag) {
      return res.status(404).json({ error: 'EpTag not found' });
    }
    res.status(200).json(ep_tag);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update an ep_tag
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { Fk_Tags, Fk_Episode } = req.body;
    const ep_tag = await EpTag.findByPk(id);
    if (!ep_tag) {
      return res.status(404).json({ error: 'EpTag not found' });
    }
    await ep_tag.update({ Fk_Tags, Fk_Episode });
    res.status(200).json(ep_tag);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete an ep_tag
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const ep_tag = await EpTag.findByPk(id);
    if (!ep_tag) {
      return res.status(404).json({ error: 'EpTag not found' });
    }
    await ep_tag.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
