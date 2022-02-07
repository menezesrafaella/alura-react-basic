import React, { Component } from "react";

import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";

import "./assets/App.css";
import './assets/reset.css';
import ListaDeCategorias from "./components/ListaDeCategorias";
import Categories from "./Data/Categories";
import ArrayNotes from "./Data/Notes";

class App extends Component {

  constructor(){
    super();
    // this.state = {
    //   notes: [],
    //   categories: []
    // }

    this.categories = new Categories();
    this.notes = new ArrayNotes()
  }

//   createNote(title,text, category){ 
//     const newNote = {title, text, category}
//     const newArrayNotes = [...this.state.notes, newNote]
//     const newState = {
//       notes: newArrayNotes
//     }
//     this.setState(newState)
//  }

//  deleteNote(index) {
//    let arrayNotes = this.state.notes;
//    arrayNotes.splice(index, 1)
//    this.setState({notes:arrayNotes})
//  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categories={this.categories} createNote={this.notes.createNote.bind(this.notes)}/>
        <main className="conteudo-principal">
        <ListaDeCategorias categories={this.categories} addCategory={this.categories.addCategory.bind(this.categories)} />
        <ListaDeNotas className="anime-left" notes={this.notes} removeNote={this.notes.deleteNote.bind(this.notes)}/>
        </main>
      </section>
    );
  }
}

export default App;
