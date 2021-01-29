import React from 'react';
import './App.css';
import './components/scss/Footer.scss';
import './components/scss/Header.scss';
import './components/scss/Navbar.scss';
import Footer from './components/jsx/Footer';
import Header from './components/jsx/Header';
import Navbar from './components/jsx/Navbar';
import Profile from './components/jsx/Profile';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
