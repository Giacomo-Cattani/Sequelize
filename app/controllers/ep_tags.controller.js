import { EpTag } from '../models/ep_tags.model.js';

// Create a new ep_tag
const epTagsController = {};

epTagsController.create = async (req, res) => {
  try {
    const { Fk_Tags, Fk_Episode } = req.body;
    const ep_tag = await EpTag.create({ Fk_Tags, Fk_Episode });
    res.status(201).json(ep_tag);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

epTagsController.getAll = async (req, res) => {
  try {
    const ep_tags = await EpTag.findAll();
    res.status(200).json(ep_tags);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

epTagsController.getById = async (req, res) => {
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

epTagsController.update = async (req, res) => {
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

epTagsController.deleteEpTag = async (req, res) => {
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

export default epTagsController;
