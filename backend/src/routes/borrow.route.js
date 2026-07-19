import express from "express";
import auth from "../middlewares/auth.middleware.js";
import authorizeRole from "../middlewares/authorizeRole.js";
import BorrowController from "../controllers/borrow.controller.js";

const router = express.Router();

router.route("/")
    .post(BorrowController.create)
    .get(auth, BorrowController.findAll)
    .delete(auth, authorizeRole("staff"), BorrowController.deleteAll);

router.route("/:id")
    .get(auth, BorrowController.findOne)
    .put(auth, BorrowController.update)
    .delete(auth, authorizeRole("staff"), BorrowController.deleteOne);

export default router;
