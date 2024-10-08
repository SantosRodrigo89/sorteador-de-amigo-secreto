import React, { useState } from "react";
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes";
import { useResultadoSorteio } from "../../state/hook/useResultadoSorteio";
import Card from "../Card";

const Sorteio = () => {
  const participantes = useListaDeParticipantes();

  const [participanteDaVez, setParticipanteDaVez] = useState("");
  const [amigoSecreto, setAmigoSecreto] = useState("");

  const resultado = useResultadoSorteio();

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  };

  return (
    <Card>
      <section className='sorteio'>
        <h2>Quem vai tirar o papelzinho?</h2>
        <form onSubmit={sortear}>
          <select
            required
            name='participantesDaVez'
            id='participantesDaVez'
            placeholder='Selecione o seu nome'
            value={participanteDaVez}
            onChange={(evento) => setParticipanteDaVez(evento.target.value)}
          >
            {participantes.map((participante) => (
              <option key={participante}>{participante}</option>
            ))}
          </select>
          <button className='botao-sortear'>Sortear</button>
        </form>
        {amigoSecreto && <p role='alert'>{amigoSecreto}</p>}
        <footer className='sorteio'>
          <img src='/imagens/aviao.png' className='aviao' alt='Um desenho de um avião de papel' />
        </footer>
      </section>
    </Card>
  );
};

export default Sorteio;
