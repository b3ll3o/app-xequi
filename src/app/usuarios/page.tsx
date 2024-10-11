'use client'

import { useState } from "react";
import { CadastroUsuarioForm } from "./cadastro/components/forms/cadastro.usuario.form";
import { CadastroUsuarioCard } from "./components/cards/cadastro.usuario.card";
import { LoginUsuarioForm } from "./login/components/forms/login.form";

export default function Usuarios() {

  const [isCadastro, setIsCadastro] = useState(false)

  function usuariosHandler(){
    setIsCadastro(!isCadastro)
  }

  function getTitulo(){
    return isCadastro 
      ? "Criar uma nova conta"
      : "Entrar no XEQUI"
  }

  return (
    <div className="content-center h-full">
      <CadastroUsuarioCard titulo={getTitulo()}>
      {isCadastro 
        ? <CadastroUsuarioForm sucessoHandler={usuariosHandler}/> 
        : <LoginUsuarioForm sucessoHandler={usuariosHandler} /> }
      </CadastroUsuarioCard>
    </div>
  );
}
