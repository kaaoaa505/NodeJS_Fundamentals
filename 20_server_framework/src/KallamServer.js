import http from "http";
import urlParser from "url";

export default {
  create: (routes) => {
    const server = http.createServer(function (request, response) {
      const { url, method } = request;
      const { pathname } = urlParser.parse(url);

      const route = routes.find((r) => {
        return r.method === method && r.path === pathname;
      });

      if (route) {
        const { statusCode, data } = route.onRequest();
        response.writeHead(statusCode);
        response.end(data);
      } else {
        response.writeHead(404);
        response.end(`Incorrect route ${method} ${pathname}`);
      }
    });

    return {
      listen: (port, callback) => {
        server.listen(port, callback);
      },
    };
  },
};
