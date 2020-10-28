import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header></Header>
      <main>
        <Container>        
            {/* <Route to='/' component={HomeScreen} exact ></Route> */}
            <Route path='/' component={HomeScreen} exact></Route>
            <Route path='/product/:id' component={ProductScreen}></Route>      
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
};

export default App;