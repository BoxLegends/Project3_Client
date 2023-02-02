import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Team from './pages/Team';
import Member from './pages/Member';
import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: 'https://dashboard.heroku.com/apps/devslist',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              {/* Create a route to display a single thought's comments based on its `thoughtId` provided in the URL */}
              <Route 
                path="/teams/:teamId" 
                element={<Team />} 
              />
              <Route 
                path="/members/:memberId" 
                element={<Member />} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;