const { Router } = require("express");

const MovieController = require("../controllers/MovieController");
const CastController = require("../controllers/CastController");

const routes = Router();

routes.get("/movies", MovieController.getAll);
routes.get("/movies/:id", MovieController.getOne);
routes.post("/movies", MovieController.store);
routes.put("/movies/:id", MovieController.update);
routes.delete("/movies/:id", MovieController.delete);

routes.post("/movie/:id_movie/actor/:id_actor/cast", CastController.store);
routes.get("/casts", CastController.getAll);
routes.get("/cast/:id", CastController.getOne);
routes.put("/casts/:id", CastController.update);
routes.delete("/cast/:id", CastController.delete);

module.exports = { routes };
