const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/auth",
    createProxyMiddleware({
      target: process.env.AUTH_SERVICE_URL,
      changeOrigin: true,
    })
  );

  app.use(
    "/article",
    createProxyMiddleware({
      target: process.env.ARTICLE_MS_URL,
      changeOrigin: true,
    })
  );

  app.use(
    "/comment",
    createProxyMiddleware({
      target: process.env.COMMENT,
      changeOrigin: true,
    })
  );

  app.use(
    "/top_pick",
    createProxyMiddleware({
      target: process.env.TOP_PICK,
      changeOrigin: true,
    })
  );

  app.use(
    "/uploads",
    createProxyMiddleware({
      target: process.env.UPLOADS,
      changeOrigin: true,
    })
  );

  app.use(
    "/hero_main",
    createProxyMiddleware({
      target: process.env.HERO_MAIN,
      changeOrigin: true,
    })
  );

  app.use(
    "/hero_docker",
    createProxyMiddleware({
      target: process.env.HERO_DOCKER_SECTION,
      changeOrigin: true,
    })
  );

  app.use(
    "/cicd",
    createProxyMiddleware({
      target: process.env.CICD_SECTION,
      changeOrigin: true,
    })
  );

  app.use(
    "/cloud_native",
    createProxyMiddleware({
      target: process.env.CLOUD_NATIVE_SECTION,
      changeOrigin: true,
    })
  );
};
