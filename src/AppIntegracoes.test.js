import api from "./api";
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./api");

describe("Requisições para API", () => {
  it("Exibir lista de transações através da API", async () => {
    api.listaTransacoes.mockResolvedValue([
      {
        transacao: "deposito",
        valor: "20",
        data: "26/09/2020",
        id: 2,
      },
      {
        transacao: "saque",
        valor: "111",
        data: "17/03/2021",
        id: 3,
      },
    ]);

    render(<App />);

    expect(await screen.findByText("deposito")).toBeInTheDocument();

    expect(screen.getByTestId("transacoes").children.length).toBe(2);
  });
});
