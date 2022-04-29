import React from "react";

const Equipe = (props) => {
    return(
      <div>
        <Sobre nome={props.nome} cargo={props.cargo} 
        idade={props.idade} />
        <Social fb={props.facebook}/>
      </div>
    );
}

const Sobre = (props) => {
  return(
<div>
  <h2> Olá sou o (a) {props.nome}</h2>
  <h2> Olá sou o (a) {props.cargo}</h2>
  <h2> Olá sou o (a) {props.idade}</h2>
</div>
  );
}

const Social = (props) => {
  return(
<div>
  <a href={props.fb}> Facebook </a>
  <a> Instagram </a>
  <a> Twitter </a>
</div>
  );
}


function App() {
  return (
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Lucas" cargo="Programador" idade="25" 
      facebook="http://google.com"/>
      <hr/>
      <Equipe nome="Manoel" cargo="Analista" idade="27"/>
      <hr/>
      <Equipe nome="Manoela" cargo="Designer" idade="29"/>
      
    </div>
  );
}

export default App;
