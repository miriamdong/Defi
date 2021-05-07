require('dotenv').config();
const express = require('express');
const router = express.Router();
const {getUserById} = require('../db/queries/users');

router.get("/:id", (req, res) => {
  const userId = req.params.id
  getUserById(userId).then((data) => {
    res.json(data)
  });
});

module.exports = router;