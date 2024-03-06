const express = require("express");

const booksController = require("../controllers/bookController");
const router = express.Router();

router.get("/", booksController.homeRoute);
router.get("/getBooks", booksController.getBooks);
router.post("/addBooks", booksController.addBooks);
router.delete("/deleteBooks/:id", booksController.deleteBooks);
router.put("/updateBookInfo/:id", booksController.updateBooks);

module.exports = router;
