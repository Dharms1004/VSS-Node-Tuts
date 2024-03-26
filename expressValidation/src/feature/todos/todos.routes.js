const express = require("express");
const { handleGetTodos } = require("./todos.controller");
const { validateUserQueryParams } = require("./todos.validator");
const router = express.Router();

router.get("/", validateUserQueryParams, handleGetTodos);

module.exports = router;