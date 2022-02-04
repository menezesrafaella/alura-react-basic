import React, { Component } from "react";

import "./CardNota.css"
import { ReactComponent as DeleteSVG }  from "../../assets/img/delete.svg"

class CardNota extends Component {

  delete(){
    const index = this.props.index
    this.props.removeNote(index);
  }
  
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <DeleteSVG alt="icon to delete" onClick={this.delete.bind(this)}/>
          <h3 className="card-nota_titulo">{this.props.title}</h3>
          <h4>{this.props.category}</h4>
        </header>
        <p className="card-nota_texto">{this.props.text}</p>
      </section>
    );
  }
}

export default CardNota;
