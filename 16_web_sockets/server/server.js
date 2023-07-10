import express from 'express';
import { Server } from 'socket.io';
import http from 'http';

const PORT = process.env.PORT || 8080;

const app = express();
const server = http.createServer(app)
const io = new Server(server);

console.log(io.path());

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});