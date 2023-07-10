import { io } from 'socket.io-client';

const SERVER_URL = 'http://localhost:8080';
const socket = io(SERVER_URL);

console.log(`Client connected to: ${socket.io.uri}`);