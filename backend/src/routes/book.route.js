import express from "express";
import auth from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validate.js";
import BookController from "../controllers/book.controller.js";

const router = express.Router();

router.route("/")
    .post(auth, validate("book", "create"), BookController.create)
    .get(BookController.findAll)
    .delete(auth, BookController.deleteAll);

router.route("/:id")
    .get(BookController.findOne)
    .put(auth, validate("book", "update"), BookController.update)
    .delete(auth, BookController.deleteOne);

export default router;
