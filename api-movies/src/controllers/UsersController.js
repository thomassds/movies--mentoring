const Users = require("../models/UsersModel");

class UsersController {
  async store(req, res) {
    const { name, email, password } = req.body;

    if (!name) {
      return res.status(404).json({ error: "name is required" });
    }
    if (!email) {
      return res.status(404).json({ error: "email is required" });
    }
    if (!password) {
      return res.status(404).json({ error: "password is required" });
    }

    try {
      const response = await Users.create({
        name,
        email,
        password,
      });

      return res.json(response);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async GetAll(req, res) {
    try {
      const response = await Users.findAll();

      return res.json(response);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async GetOne(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(404).json({ error: "Id is required " });
    }

    try {
      const response = await Users.findByPk(id);

      return res.json(response);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, email, password } = req.body;

    if (!id) {
      return res.status(404).json({ error: "Id is required " });
    }

    try {
      const response = await Users.update(
        {
          name,
          email,
          password,
        },
        { where: { id } }
      );

      return res.json(response);
    } catch ({}) {
      return res.status(400).json({ error: message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      await Users.destroy({ where: { id } });

      return res.status(200).json();
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }
}

module.exports = new UsersController();
