import { PodcasterEp } from '../models/podcaster_ep.model.js';
import { Episode } from '../models/episodes.model.js';
import { Podcaster } from '../models/podcaster.model.js';

const podcasterEpController = {};

// Create a new podcaster_ep entry
podcasterEpController.createPodcasterEp = async (req, res) => {
  try {
    const { Fk_Podcaster, Fk_Episode } = req.body;

    // Check if the podcaster and episode exist
    const podcaster = await Podcaster.findByPk(Fk_Podcaster);
    const episode = await Episode.findByPk(Fk_Episode);

    if (!podcaster || !episode) {
      return res.status(404).json({ message: 'Podcaster or episode not found' });
    }

    // Create the podcaster_ep entry
    const podcasterEp = await PodcasterEp.create({ Fk_Podcaster, Fk_Episode });

    return res.status(201).json(podcasterEp);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all podcaster_ep entries
podcasterEpController.getAllPodcasterEp = async (req, res) => {
  try {
    const podcasterEpList = await PodcasterEp.findAll();

    return res.status(200).json(podcasterEpList);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Get a single podcaster_ep entry by Id
podcasterEpController.getPodcasterEpById = async (req, res) => {
  try {
    const { id } = req.params;

    const podcasterEp = await PodcasterEp.findByPk(id);

    if (!podcasterEp) {
      return res.status(404).json({ message: 'Podcaster_ep not found' });
    }

    return res.status(200).json(podcasterEp);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Update a podcaster_ep entry by Id
podcasterEpController.updatePodcasterEpById = async (req, res) => {
  try {
    const { id } = req.params;
    const { Fk_Podcaster, Fk_Episode } = req.body;

    // Check if the podcaster and episode exist
    const podcaster = await Podcaster.findByPk(Fk_Podcaster);
    const episode = await Episode.findByPk(Fk_Episode);

    if (!podcaster || !episode) {
      return res.status(404).json({ message: 'Podcaster or episode not found' });
    }

    const podcasterEp = await PodcasterEp.findByPk(id);

    if (!podcasterEp) {
      return res.status(404).json({ message: 'Podcaster_ep not found' });
    }

    // Update the podcaster_ep entry
    await podcasterEp.update({ Fk_Podcaster, Fk_Episode });

    return res.status(200).json(podcasterEp);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete a podcaster_ep entry by Id
podcasterEpController.deletePodcasterEpById = async (req, res) => {
  try {
    const { id } = req.params;

    const podcasterEp = await PodcasterEp.findByPk(id);

    if (!podcasterEp) {
      return res.status(404).json({ message: 'Podcaster_ep not found' });
    }

    // Delete the podcaster_ep entry
    await podcasterEp.destroy();

    return res.status(204).json();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default podcasterEpController;
