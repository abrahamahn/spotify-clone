import React from 'react';

import './App.scss';

function App() {
  return (
    <div className="outerWrap">
        <div className="App">
          <div className="header">
            <button className="logo"></button>
            <button className="menu1"></button>
            <button className="menu2"></button>
            <button className="button1"></button>
            <button className="button2"></button>
          </div>
          <div className="navBar">
            <div className="logo">logo</div>
              
            <ul>
              <li>Home</li>
              <li>Search</li>
              <li>Your Library</li>
            </ul>
          </div>
        </div>
      <div className="musicControls">music controls</div>
    </div>
  )
}

export default App 