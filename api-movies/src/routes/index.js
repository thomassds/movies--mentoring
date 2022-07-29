const { Router } = require("express");

const MovieController = require("../controllers/MovieController");
const SeasonController = require("../controllers/SeasonController");
const EpisodeController = require("../controllers/EpisodeController");

const routes = Router();

//Movies
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

//Episodes
routes.get("/movies/:id_movie/episodes", EpisodeController.getAll);
routes.get("/episodes/:id", EpisodeController.getOne);
routes.post(
  "/movies/:id_movie/seasons/:id_season/episodes",
  EpisodeController.store
);
routes.put(
  "/movies/:id_movie/seasons/:id_season/episodes/:id",
  EpisodeController.update
);
routes.delete("/episodes/:id", EpisodeController.delete);

module.exports = { routes };
