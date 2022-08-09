const Movie = require("../models/MovieModel");

class MovieController {
  async store(req, res) {
    const {
      name,
      category,
      time,
      synopsis,
      avaliation,
      director,
      release_year,
      serie,
    } = req.body;

    if (!name) {
      return res.status(404).json({ error: "Movie name is required" });
    }

    if (!category) {
      return res.status(404).json({ error: "Movie category is required" });
    }

    if (!synopsis) {
      return res.status(404).json({ error: "Movie synopsis is required" });
    }

    if (!director) {
      return res.status(404).json({ error: "Movie director is required" });
    }

    try {
      const response = await Movie.create({
        name,
        category,
        time,
        synopsis,
        avaliation,
        director,
        release_year,
        serie,
      });

      return res.json(response);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async getAll(req, res) {
    try {
      const response = await Movie.findAll({
        include: [{ association: "seasons" }],
      });

      return res.json(response);
    } catch (error) {
      return res.status(400).json({ error: message });
    }
  }

  async getOne(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(404).json({ error: "Movie id is required" });
    }

    try {
      const response = await Movie.findByPk(id);

      return res.json(response);
    } catch (error) {
      return res.status(400).json({ error: message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const {
      name,
      category,
      time,
      synopsis,
      avaliation,
      director,
      release_year,
      serie,
    } = req.body;

    try {
      const response = await Movie.update(
        {
          name,
          category,
          time,
          synopsis,
          avaliation,
          director,
          release_year,
          serie,
        },
        { where: { id } }
      );

      return res.json(response);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      await Movie.destroy({ where: { id } });

      return res.status(200).json();
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }
}

module.exports = new MovieController();
