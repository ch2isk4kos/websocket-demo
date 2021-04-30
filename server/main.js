const express = require("express")();
const cors = require("cors");
const http = require("http").createServer(express);
const io = require("socket.io")(http);
const { MongoClient } = require("mongodb");

const ATLAS_URI = process.env.MONGO_ATLAS_URI;

const client = new MongoClient(ATLAS_URI);
