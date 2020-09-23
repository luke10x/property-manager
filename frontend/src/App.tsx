import { ClientContext, GraphQLClient } from 'graphql-hooks';
import React from 'react';
import './App.css';

import { Dashboard } from './manager/Dashboard';

const url = process.env.REACT_APP_BACKEND_URL || 'not-conrigured-backend-url';
const client = new GraphQLClient({ url });

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
