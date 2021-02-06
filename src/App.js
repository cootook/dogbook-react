import React from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MainWrapper from './MainWrapper/MainWrapper';

function App() {
  return (
    <div className="w">

      <Header />
      <Navbar />

      <Switch>
        <MainWrapper />
      </Switch>

      <Footer />

    </div>
  );
}

export default App;
