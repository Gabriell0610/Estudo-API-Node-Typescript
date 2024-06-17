import express from "express";

const server = express()

server.get("/", (req, res) => {
  return res.json({message: "Hello World"})
})

server.listen("3333", () => console.log("Api rodando http://localhost:3333"))