import React from "react";
import Formulario from "../Formulario";
import ListaDeParticipantes from "../ListaDeParticipantes";
import Rodape from "../Rodape";
import Card from "../Card";

const Configuracao = () => {
  return (
    <Card>
      <section>
        <div>
          <h2>Vamos começar!</h2>
          <Formulario />
          <ListaDeParticipantes />
          <Rodape />
        </div>
      </section>
    </Card>
  );
};

export default Configuracao;
