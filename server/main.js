const express = require("express")();
const cors = require("cors");
const http = require("http").createServer(express);
const io = require("socket.io")(http);
const { MongoClient } = require("mongodb");
const MONGODB_URI = process.env.MONGO_ATLAS_URI;

const client = new MongoClient(MONGODB_URI);
