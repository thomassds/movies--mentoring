const { Router } = require("express");

const MovieController = require("../controllers/MovieController");
const SeasonController = require("../controllers/SeasonController");

const routes = Router();

routes.get("/movies", MovieController.getAll);
routes.get("/movies/:id", MovieController.getOne);
routes.post("/movies", MovieController.store);
routes.put("/movies/:id", MovieController.update);
routes.delete("/movies/:id", MovieController.delete);


routes.get("/movies/:id_movie/seasons", SeasonController.getAll);
routes.get("/movies/season/:id", SeasonController.getOne);
routes.post("/movies/:id_movie/season", SeasonController.store);
routes.put("/movies/:id_movie/season/:id", SeasonController.update);
routes.delete("/season/:id", SeasonController.delete);

module.exports = { routes };
