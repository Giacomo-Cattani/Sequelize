const { UserEp } = require('../models'); // Import the UserEp model

// Create a new UserEp
exports.createUserEp = async (req, res) => {
    try {
        const { StartDate, EndDate, Fk_User, Fk_Ep } = req.body;
        const userEp = await UserEp.create({ StartDate, EndDate, Fk_User, Fk_Ep });
        res.status(201).json(userEp);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create UserEp' });
    }
};

// Get all UserEps
exports.getAllUserEps = async (req, res) => {
    try {
        const userEps = await UserEp.findAll();
        res.status(200).json(userEps);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve UserEps' });
    }
};

// Get a single UserEp by ID
exports.getUserEpById = async (req, res) => {
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
exports.updateUserEpById = async (req, res) => {
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
exports.deleteUserEpById = async (req, res) => {
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
