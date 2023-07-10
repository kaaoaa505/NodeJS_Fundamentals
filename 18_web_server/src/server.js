import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
  const { url } = req;

  let data;
  let statusCode = 200;

  switch (url) {
    case "/users":
      data = "users index";
      break;
    case "/articles":
      data = "articles index";
      break;
    case "/products":
      data = "products index";
      break;
    case "/":
      data = "Home Page";
      break;

    default:
      statusCode = 404;
      data = "Not Found";
      break;
  }

  res.writeHead(statusCode);
  res.end(data);
});

server.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT}`);
});
