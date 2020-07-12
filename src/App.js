import React from 'react';
import './App.css';
import HeaderContainer from "./HeaderContainer/HeaderContainer";
import BodyContainer from "./BodyContainer/BodyContainer";
import FooterContainer from "./FooterContainer/FooterContainer";

function App() {
  return (
    <div className="App">
        <HeaderContainer/>
        <BodyContainer/>
        <FooterContainer/>
    </div>
  );
}

export default App;
