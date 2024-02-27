import { UserEp } from '../models/users_ep.model.js'; // Import the UserEp model

// Create a new UserEp
export const createUserEp = async (req, res) => {
    try {
        const { StartDate, EndDate, Fk_User, Fk_Ep } = req.body;
        const userEp = await UserEp.create({ StartDate, EndDate, Fk_User, Fk_Ep });
        res.status(201).json(userEp);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create UserEp' });
    }
};

// Get all UserEps
export const getAllUserEps = async (req, res) => {
    try {
        const userEps = await UserEp.findAll();
        res.status(200).json(userEps);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve UserEps' });
    }
};

// Get a single UserEp by ID
export const getUserEpById = async (req, res) => {
    try {
        const { id } = req.params;
        const userEp = await UserEp.findByPk(id);
        if (userEp) {
            res.status(200).json(userEp);
        } else {
            res.status(404).json({ error: 'UserEp not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve UserEp' });
    }
};

// Update a UserEp by ID
export const updateUserEpById = async (req, res) => {
    try {
        const { id } = req.params;
        const { StartDate, EndDate, Fk_User, Fk_Ep } = req.body;
        const userEp = await UserEp.findByPk(id);
        if (userEp) {
            userEp.StartDate = StartDate;
            userEp.EndDate = EndDate;
            userEp.Fk_User = Fk_User;
            userEp.Fk_Ep = Fk_Ep;
            await userEp.save();
            res.status(200).json(userEp);
        } else {
            res.status(404).json({ error: 'UserEp not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update UserEp' });
    }
};

// Delete a UserEp by ID
export const deleteUserEpById = async (req, res) => {
    try {
        const { id } = req.params;
        const userEp = await UserEp.findByPk(id);
        if (userEp) {
            await userEp.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'UserEp not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete UserEp' });
    }
};

const usersController = {
    createUserEp,
    getAllUserEps,
    getUserEpById,
    updateUserEpById,
    deleteUserEpById
};
export default usersController