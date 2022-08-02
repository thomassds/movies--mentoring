const Actor = require("../models/ActorModel");

class ActorController {
  async store(req, res) {
    const { name, birth_date, avaliation } = req.body;

    if (!name) {
      return res.status(404).json({ error: "Name actor is required" });
    }
    if (!birth_date) {
      return res.status(404).json({ error: "Birthday date is required" });
    }
    if (!avaliation) {
      return res.status(404).json({ error: "Avaliation is required" });
    }

    try {
      const response = await Actor.create({
        name,
        birth_date,
        avaliation,
      });

      return res.json(response);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async getAll(req, res) {
    try {
      const response = await Actor.findAll();

      return res.json(response);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async getOne(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(404).json({ error: "Id actors is required" });
    }
    try {
      const response = await Actor.findByPk(id);

      return res.json(response);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, birth_date, avaliation } = req.body;

    if(!id) {
      return res.status(404).json({ error: "Id actors is required" });
    }

    try {
      const response = await Actor.update({
        name,
        birth_date,
        avaliation,
      },
      {
        where: { id } 
      });

      return res.json(response);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      await Actor.destroy({ where: { id }});

      return res.status(200).json();
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }
}

module.exports = new ActorController();
