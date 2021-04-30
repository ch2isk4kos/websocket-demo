const express = require("express")();
const cors = require("cors");
const http = require("http").createServer(express);
const io = require("socket.io")(http);
const { MongoClient } = require("mongodb");

const ATLAS_URI = process.env["MONGO_ATLAS_URI"];
const PORT = process.env["PORT"];

const client = new MongoClient(ATLAS_URI);

express.use(cors());

let collection;

io.on("connection", (socket) => {
  socket.on("join", async (gameID) => {});
  socket.on("message", async (message) => {});
});

express.get("/chats", async (req, res) => {});

http.listen(PORT, async () => {
  try {
    await client.connect();
    collection = client.db("websockets-demo").collection("chats");
    console.log(`Listening on port ${http.address().port}`);
  } catch (e) {
    console.error(e);
  }
});
