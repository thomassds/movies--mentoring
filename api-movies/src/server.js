const express = require("express");
const sequelize = require("./config/database");
const cors = require("cors");
const { routes } = require("./routes");

const app = express();
// Conexão com database
sequelize.sync().then(() => console.log("Database connected"));

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.info("Server is runing");
});
