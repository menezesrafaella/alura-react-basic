import React, { Component } from "react";

import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";

import "./assets/App.css";
import './assets/reset.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      notes: []
    }
  }
  createNote(title,text){ 
    const newNote = {title, text}
    const newArrayNotes = [...this.state.notes, newNote]
    const newState = {
      notes: newArrayNotes
    }
    this.setState(newState)
 }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro createNote={this.createNote.bind(this)}/>
        <ListaDeNotas notes={this.state.notes}/>
      </section>
    );
  }
}

export default App;
