const { Router } = require("express");

const MovieController = require("../controllers/MovieController");

const routes = Router();

routes.get("/movies", MovieController.getAll);
routes.get("/movies/:id", MovieController.getOne);
routes.post("/movies", MovieController.store);
routes.put("/movies/:id", MovieController.update);
routes.delete("/movies/:id", MovieController.delete);

module.exports = { routes };
