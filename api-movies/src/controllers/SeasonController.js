const Season = require("../models/SeasonModel");

class SeasonController {
  async getAll(req, res) {
    const { id_movie } = req.params;
    if(!id_movie) {
        return res.status(404).json({ error: "Movie id is required" })
    }
    try {
      const response = await Season.findAll({
        where: { id_movie }
      });

      return res.json(response);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async getOne(req, res) {
    const { id } = req.params;

    if(!id) {
      return res.status(404).json({ error: "Season id is required"})
    }

    try {
      const response = await Season.findByPk(id);

      return res.json(response);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async store(req, res) {
    const { id_movie } = req.params;
    const { number, description } = req.body;

    if (!id_movie) {
      return res.status(404).json({ error: "Movie id is required" });
    }
    if (!number) {
      return res.status(404).json({ error: "Season number is required" });
    }
    if (!description) {
      return res.status(404).json({ error: "Season description is required" });
    }

    try {
      const response = await Season.create({
        id_movie,
        number,
        description,
      });

      return res.json(response);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }
  
  async update(req, res) {
    const { id, id_movie } = req.params;
    const { number, description } = req.body

    if(!id) {
      return res.status(404).json({ error: "Season id is required" });
    }
    if(!id_movie) {
      return res.status(404).json({ error: "Movie id is required" });
    }

    try {
      const response = await Season.update(
        {
          number,
          description,
        },
        {where: { id, id_movie }}
      );

      return res.json(response)
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      await Season.destroy({ where: { id }});

      return res.status(200).json();
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  
}

module.exports = new SeasonController();
