import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MainWrapper from './MainWrapper/MainWrapper';

function App() {
  return (
    <div className="w">
      <BrowserRouter>

        <Header />
        <Navbar />

        <Switch>
          <MainWrapper />
        </Switch>

        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
