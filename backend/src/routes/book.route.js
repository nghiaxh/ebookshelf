import express from "express";
import auth from "../middlewares/auth.middleware.js";
import BookController from "../controllers/book.controller.js";
import BookService from "../services/book.service.js";

const router = express.Router();

router.route("/")
    .post(auth, BookService.uploadImage.single("image"), BookController.create)
    .get(BookController.findAll)
    .delete(auth, BookController.deleteAll);

router.route("/:id")
    .get(BookController.findOne)
    .put(auth, BookService.uploadImage.single("image"), BookController.update)
    .delete(auth, BookController.deleteOne);

export default router;
