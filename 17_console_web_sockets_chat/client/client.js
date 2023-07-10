import { io } from "socket.io-client";
import * as readline from "node:readline/promises";

const SERVER_URL = "http://localhost:8080";
const socket = io(SERVER_URL);
console.log(`Client connected to: ${socket.io.uri}`);

socket.on("incomming_message_event", (message) => {
  console.clear();

  console.log(
    `---- Client socket on incomming_message_event message is: ${message} `
  );

  process.stdout.write(`Write you message and hit "Enter/Return" to send: `);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function handleUserInput() {
  console.log(`Write you message and hit "Enter/Return" to send: `);
  while (true) {
    socket.emit("new_message_event", await rl.question(` `));
  }
}
handleUserInput();
