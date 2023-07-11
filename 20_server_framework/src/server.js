import KallamServer from "./KallamServer.js";
import routes from "./routes.js";

const PORT = 3000;

const server = KallamServer.create(routes);

server.listen(PORT, () => {
    console.log(`Server is running: http://localhost:${PORT}`);
});