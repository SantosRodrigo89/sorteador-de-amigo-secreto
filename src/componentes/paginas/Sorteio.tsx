import React from "react";
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes";

const Sorteio = () => {
  const participantes = useListaDeParticipantes();

  return (
    <section>
      <form>
        <select name='participantesDaVez'>
          {participantes.map((participante) => (
            <option key={participante}>{participante}</option>
          ))}
        </select>
      </form>
    </section>
  );
};

export default Sorteio;
