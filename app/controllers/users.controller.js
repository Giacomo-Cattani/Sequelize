import { User } from '../models/users.model.js';

// Create a new user
const createUser = async (req, res) => {
  try {
    const { Name, Surname, Username, Email, BirthDate, Password } = req.body;
    const newUser = await User.create({
      Name,
      Surname,
      Username,
      Email,
      BirthDate,
      Password,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single user by ID
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a user by ID
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { Name, Surname, Username, Email, BirthDate, Password } = req.body;
    const user = await User.findByPk(id);
    if (user) {
      await user.update({
        Name,
        Surname,
        Username,
        Email,
        BirthDate,
        Password,
      });
      res.status(200).json({ message: 'User updated successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a user by ID
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const usersController = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};

export default usersController;
