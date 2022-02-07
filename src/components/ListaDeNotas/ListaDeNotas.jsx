import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";

import "./ListaDeNotas.css"

class ListaDeNotas extends Component {

  constructor() {
    super();
    this.state = {notes:[]}

    this._newNotes = this._newNotes.bind(this)
  }

  componentDidMount() {
    this.props.notes.subscribe(this._newNotes)
  }

  componentWillUnmount() {
    this.props.notes.unsubscribe(this._newNotes)
  }

  _newNotes(notes) {
    this.setState({...this.state, notes})
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notes.map((note, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota removeNote={this.props.removeNote} category={note.category} title={note.title} text={note.text} index={index}/>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListaDeNotas;
