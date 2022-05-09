const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  return DB.workouts;
};

const getOneWorkout = (workkoutId) => {
  const workout = DB.workouts.find((workout) => workout.id === workkoutId);

  if (!workout) {
    return;
  }
  return workout;
}

const createNewWorkout = (newWorkout) => {

  const isAlreadyAdded = DB.workouts.findIndex(
    (workout) => workout.name === newWorkout.name) > -1;
  
  if (isAlreadyAdded) {
    return;
  }

  DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  
  return newWorkout;
}

const updateOneWorkout = (workkoutId, changes) => {
  const indexForUpdate = DB.workouts.findIndex(
    (workout) => workout.id === workkoutId
  );

  if (indexForUpdate === -1) {
    return;
  }

  const updatedWorkout = {
    ...DB.workouts[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleDateString("pt-BR", { timeZone: "UTC" }),
  };
  DB.workouts[indexForUpdate] = updatedWorkout;
  saveToDatabase(DB);
  return updatedWorkout;
};

const deleteOneWorkout = (workkoutId) => {
  const indexForDeletion = DB.workouts.findIndex(
    (workout) => workout.id === workkoutId
  );

  if (indexForDeletion === -1) {
    return;
  }
  DB.workouts.splice(indexForDeletion, 1);
  saveToDatabase(DB);
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
};