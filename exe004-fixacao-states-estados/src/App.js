import React, { Component } from 'react';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
   nome:'Matheus',
   cargo:'Programador',
   idade: '28 anos'
  }
}
  render() {
    return (
      <div>
       <h1>{this.state.nome}</h1>
       <h2>{this.state.cargo}</h2>
       <h2>{this.state.idade} </h2>
       <hr/>
      </div>
    );
  }
}

export default App;