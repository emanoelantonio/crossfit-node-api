const workout = require("../database/workout");

const getAllWorkouts = () => {
  const allWorkouts = workout.getAllWorkouts();
  
  return allWorkouts;
}

const getOneWorkout = () => {
  return;
}

const createNewWorkout = () => {
  return;
}

const updateOneWorkout = () => {
  return;
}

const deleteOneWorkout = () => {
  return;
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
};