import React from "react";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";
import { useNavigate } from "react-router-dom";
import "./Rodape.css";

const Rodape = () => {
  const participantes = useListaDeParticipantes();

  const navegarPara = useNavigate();

  const iniciar = () => {
    navegarPara("/sorteio");
  };

  return (
    <footer className='rodape-configuracoes'>
      <button className='botao' disabled={participantes.length < 3} onClick={iniciar}>
        Iniciar sorteio
      </button>
      <img src='/imagens/sacolas.png' alt='Sacolas de compras' />
    </footer>
  );
};

export default Rodape;
