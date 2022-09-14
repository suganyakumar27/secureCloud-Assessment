import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/footer';
import Nav from './components/Nav';
import News from './components/News';
import Newsdetails from './components/Newsdetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Content/>
      <News newsdetails={Newsdetails}/>
      <Footer/>
    </div>
  );
}

export default App;
