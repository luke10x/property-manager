import express from 'express';
import { createApollo } from './apollo';

const server = express();

createApollo()
  .then(apollo => {
    apollo.applyMiddleware({
      app: server,
      path: '/',
    });
    
    const port = process.env.PORT || 9090;
    server.listen(port, () => {
      console.log(`🎻 server running on http://localhost:${port}`);
    });
  });
