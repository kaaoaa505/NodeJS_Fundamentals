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
          if (r.path.includes(":")) {
            let routeSegments = r.path.slice(1).split("/");
            let requestSegments = pathname.slice(1).split("/");

            let staticSegmentsMatch = true;
            for (let [index, segment] of routeSegments.entries()) {
              if (!segment.startsWith(":")) {
                staticSegmentsMatch =
                  staticSegmentsMatch && segment === requestSegments[index];
              }
            }

            return r.method === method && staticSegmentsMatch;
          } else {
            return r.method === method && r.path === pathname;
          }
        });

        if (route) {
          let urlParams = {};

          if (route.path.includes(":")) {
            let routeSegments = route.path.slice(1).split("/");
            let requestSegments = pathname.slice(1).split("/");

            for (let [index, segment] of routeSegments.entries()) {
              if (segment.startsWith(":")) {
                urlParams[segment.slice(1)] = requestSegments[index];
              }
            }
          }

          const routeObj = {
            request,
            response,
            query,
            body,
            urlParams,
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
