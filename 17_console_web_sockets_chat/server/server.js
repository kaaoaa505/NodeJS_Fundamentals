import express from "express";
import { Server } from "socket.io";
import http from "http";

const PORT = process.env.PORT || 8080;

const app = express();
const server = http.createServer(app);
const io = new Server(server);

console.log(io.path());

io.on("connection", (socket) => {
  console.log("A new client has connected!.");

  socket.on('new_message_event', (message) => {
    console.log(`\n---- Server io on socket on new_message_event message is: ${message}`)

    // socket.emit("incomming_message_event", message);
    io.emit("incomming_message_event", message);
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
