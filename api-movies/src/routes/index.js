const { Router } = require("express");

const MovieController = require("../controllers/MovieController");
const ActorController = require("../controllers/ActorController");
const Actor = require("../models/ActorModel");

const routes = Router();

routes.get("/movies", MovieController.getAll);
routes.get("/movies/:id", MovieController.getOne);
routes.post("/movies", MovieController.store);
routes.put("/movies/:id", MovieController.update);
routes.delete("/movies/:id", MovieController.delete);

routes.get("/actors", ActorController.getAll);
routes.get("/actors/:id", ActorController.getOne);
routes.post("/actors", ActorController.store);
routes.put("/actors/:id", ActorController.update);
routes.delete("/actors/:id", ActorController.delete);

module.exports = { routes };
