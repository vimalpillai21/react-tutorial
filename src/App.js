import React from 'react';
import Comp from './components/Greet/Greet';
// import { Greet } from './components/Greet';
import Welcome from './components/Welcome/Welcome';
import Hello from './components/Hello/Hello';
import './App.css';

function App() {
  return (
    <div className="App">
      <Comp />
      <Welcome />
      {/* <Greet /> */}
      <Hello name="Bruce" heroName="Batman"><p>This is a children prop</p></Hello>
      <Hello name="Clark" heroName="Superman" />
      <Hello name="Diana" heroName="Wonder Woman" />
    </div>
  );
}

export default App;
