const Episode = require("../models/EpisodeModel");

class EpisodeController {
  async store(req, res) {
    const { id_movie, id_season } = req.params;
    const { number, title, synopsis, time } = req.body;

    if (!id_movie) {
      return res.status(404).json({ error: "Movie id is required" });
    }

    if (!id_season) {
      return res.status(404).json({ error: "Season id is required" });
    }

    if (!number) {
      return res.status(404).json({ error: "Episode name is required" });
    }

    if (!title) {
      return res.status(404).json({ error: "Episode category is required" });
    }

    if (!synopsis) {
      return res.status(404).json({ error: "Episode synopsis is required" });
    }

    if (!time) {
      return res.status(404).json({ error: "Episode director is required" });
    }

    try {
      const response = await Episode.create({
        id_movie,
        id_season,
        number,
        title,
        synopsis,
        time,
      });

      return res.json(response);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async getAll(req, res) {
    const { id_movie } = req.params;
    try {
      const response = await Episode.findAll({
        where: {
          id_movie,
        },
      });

      return res.json(response);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async getOne(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(404).json({ error: "Episode id is required" });
    }

    try {
      const response = await Episode.findByPk(id);

      return res.json(response);
    } catch (error) {
      return res.status(400).json({ error: message });
    }
  }

  async update(req, res) {
    const { id, id_movie, id_season } = req.params;
    const { number, title, synopsis, time } = req.body;

    if (!id) {
      return res.status(404).json({ error: "Episode id is required" });
    }

    if (!id_movie) {
      return res.status(404).json({ error: "Movie id is required" });
    }

    if (!id_season) {
      return res.status(404).json({ error: "Season id is required" });
    }

    try {
      const response = await Episode.update(
        {
          number,
          title,
          synopsis,
          time,
        },
        { where: { id, id_movie, id_season } }
      );

      return res.json(response);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      await Episode.destroy({ where: { id } });

      return res.status(200).json();
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }
}

module.exports = new EpisodeController();
