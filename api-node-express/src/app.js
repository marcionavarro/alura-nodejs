import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipulardorDeErros from "./midllewares/manipuladordeErros.js";
import manipuladorde404 from "./midllewares/manipulador404.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
});

const app = express();
app.use(express.json());
routes(app);

app.use(manipuladorde404);

app.use(manipulardorDeErros);

export default app;