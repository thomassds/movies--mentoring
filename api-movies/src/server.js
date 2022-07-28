const express = require("express");
const sequelize = require("./config/database");

const { routes } = require("./routes");

const app = express();

// Conexão com database
sequelize.sync().then(() => console.log("Database connected"));

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.info("Server is runing");
});
