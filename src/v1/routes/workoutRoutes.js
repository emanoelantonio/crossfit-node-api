const express = require("express");
const workoutController = require("../../controllers/workoutController");

const router = express.Router();
// Exibir todos os Workouts
router.get("/", workoutController.getAllWorkouts);
// Exibir apenas um workout
router.get("/:workoutId", workoutController.getOneWorkout);
// Criar um workout
router.post("/", workoutController.createNewWorkout);
// Atualizar um workout
router.patch("/:workoutId", workoutController.updateOneWorkout);
// Deletar um workout
router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;