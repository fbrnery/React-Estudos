import React from "react";


function Planetas(props) {
  return (
    <div>
        <h4>{props.name} </h4>
        <p> {props.description} </p>
        </div>
  );
}

export default Planetas;