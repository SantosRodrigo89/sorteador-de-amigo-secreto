import React from "react";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";
import { useNavigate } from "react-router-dom";

const Rodape = () => {
  const participantes = useListaDeParticipantes();

  // const navegarPara = useNavigate

  return (
    <footer>
      <button disabled={participantes.length < 3}>Iniciar sorteio</button>
    </footer>
  );
};

export default Rodape;
