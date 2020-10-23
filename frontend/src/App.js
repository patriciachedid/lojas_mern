import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <main className="py-4">
          <Route to='/' exact component={HomeScreen}></Route>
          <Route to='/product/:id' component={ProductScreen}></Route>
        </main>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
