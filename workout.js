const express = require('express');
const WorkoutRouter = express.Router();
const Workout = require('./models/workoutSchema');
WorkoutRouter.post('/workoutDetails', async (req, res) => {
  try {
    const { workoutDetails } = req.body;
    const createdBy = req.body.createdBy;
    const newWorkout = new Workout({
      workoutDetails,
      createdBy
    });  
    const savedWorkout = await newWorkout.save();
    res.status(201).json(savedWorkout); 
  } catch (error) {
    console.error('Error saving workout:', error);
    res.status(500).json({ error: 'An error occurred while saving the workout.' });
  }
});
WorkoutRouter.get('/agendaData', async (req, res) => {
  try {
    //console.log("Received UserId:", req.query.userId);
    // const { userId } = req.query;

  // onst {userId}  = req.query;c
    
    const workouts = await Workout.find({createdBy:req.query.userId});
    res.json(workouts);
  } catch (err) {
    console.error('Error fetching workout data:', err);
    res.status(500).json({ error: 'Failed to fetch workout data' });
  }
});
WorkoutRouter.get('/:workoutId', async (req, res) => {
  const { workoutId } = req.params;
  try {
    const workout = await Workout.findById(workoutId);
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.json(workout);
  } catch (error) {
    console.error('Error fetching workout details:', error);
    res.status(500).json({ error: 'Server error' });
  }
});
WorkoutRouter.put('/:workoutId', async (req, res) => {
  const workoutId = req.params.workoutId;
  console.log("id",workoutId)
  const updatedWorkoutData = req.body;
  console.log("data",updatedWorkoutData)
  try {
    // Find the existing workout by its ID
    const existingWorkout = await Workout.findById(workoutId);
    if (!existingWorkout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
     existingWorkout.title = updatedWorkoutData.title;
    existingWorkout.startTime = updatedWorkoutData.startTime;
    existingWorkout.endTime = updatedWorkoutData.endTime;
    existingWorkout.date = updatedWorkoutData.date;
    existingWorkout.exercises = updatedWorkoutData.exercises;
     existingWorkout.set(updatedWorkoutData);
     
    // Validate the updated workout data
    const validationError = existingWorkout.validateSync();
    if (validationError) {
      return res.status(400).json({ error: validationError.message });
    }
    // Save the updated workout
    const updatedWorkout = await existingWorkout.save();
    // Respond with the updated workout
    res.status(200).json(updatedWorkout);
  } catch (error) {
    // Handle any errors that occur during the update process
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// WorkoutRouter.put('/:workoutId', async (req, res) => {
//   const workoutId = req.params.workoutId;
//   console.log("id",workoutId)
//   const updatedWorkoutData = req.body.workoutDetails[0]; // Get the workout details from the request body

//   try {
//     const existingWorkout = await Workout.findById(workoutId);
//     if (!existingWorkout) {
//       return res.status(404).json({ error: 'Workout not found' });
//     }

//     // Update the workout properties from the request body
//     existingWorkout.workoutDetails[0].title = updatedWorkoutData.title;
//     existingWorkout.workoutDetails[0].date = updatedWorkoutData.date;
//     existingWorkout.workoutDetails[0].startTime = updatedWorkoutData.startTime;
//     existingWorkout.workoutDetails[0].endTime = updatedWorkoutData.endTime;

//     // Add new exercises to the existing workout's exercises array
//     existingWorkout.workoutDetails[0].exercises.push(...updatedWorkoutData.exercises);

//     // Validate the updated workout data
//     const validationError = existingWorkout.validateSync();
//     if (validationError) {
//       return res.status(400).json({ error: validationError.message });
//     }

//     // Save the updated workout
//     const updatedWorkout = await existingWorkout.save();

//     // Respond with the updated workout
//     res.status(200).json(updatedWorkout);
//   } catch (error) {
//     // Handle errors
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
WorkoutRouter.delete('/:workoutId', async (req, res) => {
  const workoutId = req.params.workoutId;
  try {
    // Find the workout by its ID and delete it
    const deletedWorkout = await Workout.findByIdAndDelete(workoutId);
    if (!deletedWorkout) {
      // If the workout with the specified ID is not found
      return res.status(404).json({ error: 'Workout not found' });
    }
    // Workout successfully deleted
    return res.json({ message: 'Workout deleted successfully' });
  } catch (error) {
    console.error('Error deleting workout:', error);
    return res.status(500).json({ error: 'Error deleting workout' });
  }
});




module.exports = WorkoutRouter;
