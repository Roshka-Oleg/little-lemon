import React from 'react';
import './App.css';
import Nav from './Components/Nav.js'
import Header from './Components/Header.js'
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'
function App() {
  return (
    <div>
    <React.Fragment>
      <Nav />
      <Main />
      <Footer />
    </React.Fragment>
    </div>
  );
}

export default App;
