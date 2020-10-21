import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <> 
      <Header></Header>
      <main>
        <HomeScreen></HomeScreen>
      </main>
      <Footer></Footer>
    </>    
  );
}

export default App;
