import React, { Component } from "react";

import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";

import "./assets/App.css";
import './assets/reset.css';
import ListaDeCategorias from "./components/ListaDeCategorias";

class App extends Component {

  constructor(){
    super();
    this.state = {
      notes: [],
      categories: []
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

 deleteNote(index) {
   let arrayNotes = this.state.notes;
   arrayNotes.splice(index, 1)
   this.setState({notes:arrayNotes})
 }

 addCategory(name) {
   const newArrayCategories = [...this.state.categories, name]
   const newState = {...this.state, categories: newArrayCategories}
   this.setState(newState)
 }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categories={this.state.categories} createNote={this.createNote.bind(this)}/>
        <main className="conteudo-principal">
        <ListaDeCategorias categories={this.state.categories} addCategory={this.addCategory.bind(this)} />
        <ListaDeNotas className="anime-left" notes={this.state.notes} removeNote={this.deleteNote.bind(this)}/>
        </main>
      </section>
    );
  }
}

export default App;
