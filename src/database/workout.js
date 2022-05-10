const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  try {
    return DB.workouts;
    
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneWorkout = (workkoutId) => {
  try {
    const workout = DB.workouts.find((workout) => workout.id === workkoutId);
    if (!workout) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workkoutId}'`,
      };
    }
    return workout;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }

  return workout;
}

const createNewWorkout = (newWorkout) => {
  try {
    const isAlreadyAdded = DB.workouts.findIndex(
      (workout) => workout.name === newWorkout.name) > -1;
    
    if (isAlreadyAdded) {
      throw {
        status: 400, message: `workout with the name '${newWorkout.name}' already existis`,
      };
    }
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
    
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const updateOneWorkout = (workkoutId, changes) => {
  try {
    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === changes.name) > -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Workout with the name '${changes.name}' already exists`,
      };
    }
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
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }

};

const deleteOneWorkout = (workkoutId) => {
  try {
    const indexForDeletion = DB.workouts.findIndex(
      (workout) => workout.id === workkoutId
    );
  
    if (indexForDeletion === -1) {
      return;
    }
    DB.workouts.splice(indexForDeletion, 1);
    saveToDatabase(DB);
    
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
};