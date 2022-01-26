import React, { Component } from "react";

import "./ListaDeCategorias.css";

class ListaDeCategorias extends Component {

    _handleEventInput(e) {
        if(e.key === "Enter") {
            let value = e.target.value
            this.props.addCategory(value)
        }
    }
  
  render() {
    return (
      <section className="lista-categorias">
      <ul className="lista-categorias_lista">
        {this.props.categories.map((category, index) => {
          return (
            <li key={index} className="lista-categorias_item">
              {category}
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        className="lista-categorias_input"
        placeholder="Adicionar Categoria"
        onKeyUp={this._handleEventInput.bind(this)}
      />
    </section>
    );
  }
}

export default ListaDeCategorias;
