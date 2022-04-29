import React from "react";
import Hello from './Hello'



/*Três formas de criar um component funcional:
1-

class HelloWorld extends React.Component {
  render() {
    return <h1> Hello World </h1>;
  }
}

2- 

const HelloWorld = () => {
  return <h1> Hello World </h1>;
}

*/

/*3-*/

function App() {
  return (
    <div>
      <Hello/>
    </div>
  );
}

export default App;
