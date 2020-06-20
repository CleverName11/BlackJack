const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  //adds a proxy to assist in development
  app.use(
    ["/api/*", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
