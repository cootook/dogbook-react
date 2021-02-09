import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MainWrapper from './MainWrapper/MainWrapper';

function App(props) {
  return (
    <div className="w">

      <Header />
      <Navbar />

      <MainWrapper state={props.state} />

      <Footer />

    </div>
  );
}

export default App;
