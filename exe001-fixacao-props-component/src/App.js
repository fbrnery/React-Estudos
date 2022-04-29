import React from 'react';

const Bemvindo = (props) => {
  return(
    <div>
      <h2>Bem-vindo(a){props.nome}</h2>
      <h2>Sua idade é {props.idade}</h2>
    </div>
  )
}



function App() {
  return (
    <div>
      Olá Mundo !!!
      <h1>Curso de React</h1>
      <Bemvindo nome="Matheus" idade="24"/>
      <Bemvindo nome="Barbará" idade="28"/>
      <Bemvindo nome="Lany" idade="29"/>
    </div>
  );
}

export default App;
