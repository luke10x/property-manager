import { ClientContext, GraphQLClient } from 'graphql-hooks';
import React from 'react';
import './App.css';

import { Dashboard } from './manager/Dashboard';

const client = new GraphQLClient({ url: 'http://localhost:9090/' })


const App: React.FC = () => {
  return (
    <div className="App">
      <ClientContext.Provider value={client}>
        <Dashboard />
      </ClientContext.Provider>
    </div>
  );
};

export default App;