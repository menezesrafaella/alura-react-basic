import React, { Component } from "react";

export class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Titulo" />
        <textarea placeholder="Escreva sua nota..."></textarea>
        <button>Criar</button>
      </form>
    );
  }
}

export default FormularioCadastro;
