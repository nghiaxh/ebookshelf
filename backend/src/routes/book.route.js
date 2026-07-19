import express from "express";
import auth from "../middlewares/auth.middleware.js";
import authorizeRole from "../middlewares/authorizeRole.js";
import BookController from "../controllers/book.controller.js";

const router = express.Router();

router.route("/")
    .post(auth, authorizeRole("staff"), BookController.create)
    .get(BookController.findAll)
    .delete(auth, authorizeRole("staff"), BookController.deleteAll);

router.route("/:id")
    .get(BookController.findOne)
    .put(auth, authorizeRole("staff"), BookController.update)
    .delete(auth, authorizeRole("staff"), BookController.deleteOne);

export default router;
