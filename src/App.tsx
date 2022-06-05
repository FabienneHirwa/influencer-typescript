import React from 'react';
import Influencers from './components/Influencers';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../src/components/nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Influencers />
    </div>
  );
}

export default App;