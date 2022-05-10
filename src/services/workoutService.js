const { v4: uuid } = require("uuid");
const workout = require("../database/workout");

const getAllWorkouts = () => {
  try {
    const allWorkouts = workout.getAllWorkouts();
    return allWorkouts;
    
  } catch (error) {
    throw error;
  }
}

const getOneWorkout = (workoutId) => {
  try {
    const workout = workout.getOneWorkout(workoutId);
    return workout;
    
  } catch (error) {
    throw error;
  }
}

const createNewWorkout = (newWorkout) => {

  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleDateString("pt-BR", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleDateString("pt-BR", { timeZone: "UTC" }),
  };
  try {
    const createdWorkout = workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
    
  } catch (error) {
    throw error;
  }

};

const updateOneWorkout = (workoutId, changes) => {
  try {
    const updatedWorkout = workout.updateOneWorkout(workoutId, changes);
    return updatedWorkout;
    
  } catch (error) {
    throw error;
  }
}

const deleteOneWorkout = (workoutId) => {
  try {
    workout.deleteOneWorkout(workoutId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
};