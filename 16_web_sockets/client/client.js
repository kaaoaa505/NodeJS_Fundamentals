import { io } from "socket.io-client";

const SERVER_URL = "http://localhost:8080";
const socket = io(SERVER_URL);

console.log(`Client connected to: ${socket.io.uri}`);

socket.on("greeting_from_server_to_client_event", (data) => {
  console.log("Client socket on greeting_from_server_to_client_event console log");
  console.log("---- Client data is: ", data);
});

for (let index = 0; index < 5; index++) {
  socket.emit("greeting_from_client_to_server_event", "Client socket emit message .... " + index);
}
