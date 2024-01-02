const express = require('express');
const ExerciseRouter = express.Router();
const Workout = require('./models/workoutSchema'); // Import your Workout model

// DELETE request to delete a specific exercise from a workout
ExerciseRouter.delete('/:workoutId/:id', async (req, res) => {
    const workoutId = req.params.workoutId;
    console.log('id',workoutId)
    const exerciseId = req.params.id;
    console.log('exercise id',exerciseId)

    try {
      // Find the workout by workoutId and update it by removing the specified exercise
      const updatedWorkout = await Workout.findOneAndUpdate(
        { '_id': workoutId },
        { $pull: { 'workoutDetails.$[].exercises': { '_id': exerciseId } } },
        { new: true }
      );
  
      // If the workout doesn't exist, return a 404 Not Found response
      if (!updatedWorkout) {
        return res.status(404).json({ error: 'Workout not found' });
      }
      console.log("exercise deleted")
      // Return the updated workout or a success message
      return res.status(200).json(updatedWorkout);
    } catch (error) {
      // Handle errors (database errors, etc.)
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = ExerciseRouter;
