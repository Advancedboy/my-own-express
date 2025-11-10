import http from "http";

export default function myExpress() {
  const routes = {};

  const app = {
    get(path, handler) {
      routes[`GET ${path}`] = handler;
      return app;
    },
    post(path, handler) {
      routes[`POST ${path}`] = handler;
      return app;
    },
    listen(port, callback) {
      const server = http.createServer((req, res) => {
        const key = `${req.method} ${req.url}`;
        const handler = routes[key];
        if (handler) {
          handler(req, res);
        } else {
          res.statusCode = 404;
          res.end("Not found");
        }
      });
      server.listen(port, callback);
    },
  };

  return app;
}
