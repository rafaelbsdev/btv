import React from 'react';
import {
  ApolloClient, InMemoryCache, ApolloProvider,
} from '@apollo/client';
import './App.css';
import CreateUser from './Components/CreateUser';
import ListOfUsers from './Components/ListOfUsers';
import UpdatePassword from './Components/UpdatePassword';
import Header from './Components/Header';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:5432/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Header />
      <CreateUser />
      <ListOfUsers />
      <UpdatePassword />
    </ApolloProvider>
  );
}

export default App;
