import React from 'react';
// import Comp from './components/Greet/Greet';
// import { Greet } from './components/Greet';
// import Welcome from './components/Welcome/Welcome';
// import Hello from './components/Hello/Hello';
// import Message from './components/Message/Message';
import Counter from './components/Counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Message /> */}
      <Counter />
      {/* <Comp />
      <Welcome name="Bruce" heroName="Batman"><p>This is a children prop</p></Welcome>
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder Woman" />
      <hr /> */}
      {/* <Greet /> */}
      {/* <Hello name="Bruce" heroName="Batman"><p>This is a children prop</p></Hello>
      <Hello name="Clark" heroName="Superman"><button>Action</button></Hello>
      <Hello name="Diana" heroName="Wonder Woman" /> */}
    </div>
  );
}

export default App;
