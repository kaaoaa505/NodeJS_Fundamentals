import http from "http";
import urlParser from "url";
import qs from "querystring";

import UsersIndex from "./UsersIndex.js";
import UsersById from "./UserById.js";

const PORT = 3000;

const server = http.createServer((req, res) => {
  const { url, method } = req;
  const { pathname } = urlParser.parse(url);

  let data;
  let statusCode = 200;

  if (method === "GET") {
    if (pathname === "/users") {
      UsersIndex(req, res);
    } else if (pathname.startsWith("/users/")) {
      const userId = pathname.slice(1).split('/')[1] ?? 0;
      UsersById(req, res, userId);
    } else {
      statusCode = 404;
      data = "Not Found";
    }
  }

  res.writeHead(statusCode);
  res.end(data);
});

server.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT}`);
});
