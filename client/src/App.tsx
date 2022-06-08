import React from 'react';
import {
  ApolloClient, InMemoryCache, ApolloProvider,
} from '@apollo/client';
import './App.css';
import CreateUser from './Components/Createuser/CreateUser';
import ListOfUsers from './Components/ListOfUsers/ListOfUsers';
import UpdatePassword from './Components/UpdatePassword/UpdatePassword';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div className="bg">
        <Header />
        <div className="main">
          <CreateUser />
          <UpdatePassword />
        </div>
        <ListOfUsers />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
