import React, { Component } from 'react';
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
