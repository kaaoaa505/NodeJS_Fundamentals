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

  for (let index = 0; index < 10; index++) {
    socket.emit(
      "greeting_from_server_to_client_event",
      "Server io on socket emit message .... " + index
    );
  }

  socket.on("greeting_from_client_to_server_event", (data) => {
    console.log("Server io on connection socket on greeting_from_client_to_server_event console log");
    console.log("---- Server data is: ", data);
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
