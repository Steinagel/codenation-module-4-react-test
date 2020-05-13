import React from "react";
import Container from "../Container";
import "./Contacts.scss";

class Contacts extends React.Component {
  render() {
    return (
      <Container data-testid="contacts">
        <article className="contact" data-testid="contact">
          <span className="contact__avatar" />
          <span className="contact__data">Nome</span>
          <span className="contact__data">Telefone</span>
          <span className="contact__data">País</span>
          <span className="contact__data">Admissão</span>
          <span className="contact__data">Empresa</span>
          <span className="contact__data">Departamento</span>
        </article>
        {this.props.children}
      </Container>
    );
  }
}

export default Contacts;
