import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.s2d5e.mongodb.net/`
const cliente = new MongoClient(url);

let documentosColecao;
let usuariosColecao;

try {
    await cliente.connect();

    const db = cliente.db("alura-websockets");
    documentosColecao = db.collection("documentos");
    usuariosColecao = db.collection("usuarios");

    console.log("🚀 ~ Conectado ao banco de dados com sucesso!")
} catch (erro) {
    console.log("❌ ~ error:", erro)
}

export { documentosColecao, usuariosColecao }