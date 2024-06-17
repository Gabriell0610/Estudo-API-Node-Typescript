import express from "express";

const server = express();

server.get("/", (req, res) => {
  return res.send("Hello World Gabriel");
});

server.listen("3333", () => {
  console.log("API rodando na rota http://localhost:3333");
});
