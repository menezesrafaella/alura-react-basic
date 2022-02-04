import React, { Component } from "react";

import "./FormularioCadastro.css"

export class FormularioCadastro extends Component {

  constructor(props){
    super(props);
    this.title = ""
    this.text = ""
    this.category = "Sem Categoria"
  }

  _handleChangeTitle({target}){
    this.title = target.value 
  }

  _handleChangeText({target}){
    this.text = target.value
  }

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text, this.category)

  }

  _handleChangeCategory(event) {
    event.stopPropagation();
    this.category = event.target.value;
  }

  render() {
    return (
      <form  className="form-cadastro" onSubmit={this._createNote.bind(this)}>
        <select onChange={this._handleChangeCategory.bind(this)} className="form-cadastro_input">
          <option>Sem Categoria</option>
          {this.props.categories.map((category, index) => {
            return <option key={index}>{category}</option>

          })}
        </select>
      <input
        type="text"
        placeholder="Título"
        className="form-cadastro_input"
        onChange={this._handleChangeTitle.bind(this)}
      />
      <textarea
        rows={15}
        placeholder="Escreva sua nota..."
        className="form-cadastro_input"
        onChange={this._handleChangeText.bind(this)}
      />
      <button className="form-cadastro_input form-cadastro_submit">
        Criar Nota
      </button>
    </form>
    );
  }
}

export default FormularioCadastro;
