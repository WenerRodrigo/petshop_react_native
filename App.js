import React from "react";
import Rotas from "./src/Rotas";
import 'intl';
import 'intl/locale-data/jsonp/pt-BR'
import TelaPadrao from "./src/componentes/TelaPadrao";

export default function App() {
  return (
    <TelaPadrao>
      <Rotas />
    </TelaPadrao>
  )
}

