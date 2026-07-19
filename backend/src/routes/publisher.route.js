import express from "express";
import auth from "../middlewares/auth.middleware.js";
import authorizeRole from "../middlewares/authorizeRole.js";
import PublisherController from "../controllers/publisher.controller.js";

const router = express.Router();

router.route("/")
    .post(auth, authorizeRole("staff"), PublisherController.create)
    .get(PublisherController.findAll)
    .delete(auth, authorizeRole("staff"), PublisherController.deleteAll);

router.route("/:id")
    .get(PublisherController.findOne)
    .put(auth, authorizeRole("staff"), PublisherController.update)
    .delete(auth, authorizeRole("staff"), PublisherController.deleteOne);

export default router;
