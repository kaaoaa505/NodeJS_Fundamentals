import http from "http";
import urlParser from "url";
import qs from "querystring";

export default {
  create: (routes) => {
    const server = http.createServer(function (request, response) {
      const { url, method } = request;
      const { pathname, query: queryString } = urlParser.parse(url);
      const query = qs.parse(queryString);

      let data = "";
      request.on("data", (chunk) => {
        data += chunk;
      });

      request.on("end", () => {
        let body;

        try {
          body = JSON.parse(data);
        } catch (e) {
          // console.log('The request body is not a valid json');
          // console.error("Error", e);
          body = {};
        }

        const route = routes.find((r) => {
          return r.method === method && r.path === pathname;
        });

        if (route) {
          const routeObj = {
            request,
            response,
            query,
            body,
          };

          const { statusCode, data } = route.onRequest(routeObj);
          response.writeHead(statusCode);
          response.end(data);
        } else {
          response.writeHead(404);
          response.end(`Incorrect route ${method} ${pathname}`);
        }
      });
    });

    return {
      listen: (port, callback) => {
        server.listen(port, callback);
      },
    };
  },
};
