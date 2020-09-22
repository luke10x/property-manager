import express from "express";
import { apollo } from "./apollo";

const server = express();

apollo.applyMiddleware({
  app: server,
  path: "/"
});

const port = process.env.PORT || 9090;
server.listen(port, () => {
  console.log(`🎻 server running on http://localhost:${port}`);
});
