import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";

import "./ListaDeNotas.css"

class ListaDeNotas extends Component {

  render() {
    return (
      <ul className="lista-notas">
        {this.props.notes.map((note, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota title={note.title} text={note.text}/>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListaDeNotas;
