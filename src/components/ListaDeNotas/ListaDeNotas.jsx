import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Estudos", "Trabalho", "Lazer").map((categoria, index) => {
          return (
            <li key={index}>
              {categoria}
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListaDeNotas;
