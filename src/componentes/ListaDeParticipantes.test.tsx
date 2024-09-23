/* eslint-disable no-restricted-globals */
import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import ListaDeParticipantes from "./ListaDeParticipantes";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";

jest.mock("../state/hook/useListaDeParticipantes", () => {
  // finge pra mim, kkkk
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

describe("uma lista vazia de participantes", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
  });

  test("deve ser renderizada sem elementos", () => {
    render(
      <RecoilRoot>
        <ListaDeParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(0);
  });
});

describe("uma lista preenchida de participantes", () => {
  const participantes = ["Zé", "Jou"];
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
  });

  test("deve ser renderizada com elementos", () => {
    render(
      <RecoilRoot>
        <ListaDeParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(participantes.length);
  });
});
