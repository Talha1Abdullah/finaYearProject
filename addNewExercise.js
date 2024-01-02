
const express = require('express');
const newExerciserouter = express.Router();
 const exerciseList=require('./models/exerciseDataSchema')

newExerciserouter.post('/newExercise', async (req, res) => {
  try {
    const { name, category, icon } = req.body;
    const exercise = new exerciseList({
      name,
      category,
      icon,
    });
    await exercise.save();
    res.status(201).json({ message: 'Exercise created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

module.exports = newExerciserouter;
