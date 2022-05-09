const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.send(`<h2>Nova rota em ${req.baseUrl}</h2>`);
});

module.exports = router;