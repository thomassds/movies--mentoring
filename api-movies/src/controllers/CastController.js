const Cast = require("../models/CastModel");

class CastController {
  async store(req, res) {
    const { id_movie, id_actor } = req.params;

    if (!id_movie) {
      return res.status(404).json({ error: "Movie id is required" });
    }

    if (!id_actor) {
      return res.status(404).json({ error: "Actor id is required" });
    }

    try {
      const response = await Cast.create({
        id_movie,
        id_actor,
      });

      return res.json(response);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async getAll(req, res) {
    try {
      const response = await Cast.findAll({});

      return res.json(response);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async getOne(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(404).json({ error: "Cast id is required" });
    }

    try {
      const response = await Cast.findByPk(id);

      return res.json(response);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { id_movie, id_actor } = req.body;

    if (!id) {
      return res.status(404).json({ error: "Id id is required" });
    }

    if (!id_movie) {
      return res.status(404).json({ error: "Movie id is required" });
    }

    if (!id_actor) {
      return res.status(404).json({ error: "Actor id is required" });
    }

    try {
      const response = await Cast.update(
        {
          id_movie,
          id_actor,
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
      await Cast.destroy({ where: { id } });

      return res.status(200).json();
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }
}

module.exports = new CastController();
