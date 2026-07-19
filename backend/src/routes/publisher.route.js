import express from "express";
import auth from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validate.js";
import PublisherController from "../controllers/publisher.controller.js";

const router = express.Router();

router.route("/")
    .post(auth, validate("publisher", "create"), PublisherController.create)
    .get(PublisherController.findAll)
    .delete(auth, PublisherController.deleteAll);

router.route("/:id")
    .get(PublisherController.findOne)
    .put(auth, validate("publisher", "update"), PublisherController.update)
    .delete(auth, PublisherController.deleteOne);

export default router;
