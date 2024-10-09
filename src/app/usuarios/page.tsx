import { CadastroUsuarioCard } from "./cadastro/components/cards/cadastro.usuario.card";
import { CadastroUsuarioForm } from "./cadastro/components/forms/cadastro.usuario.form";

export default function Usuarios() {
    return (
      <div className="content-center h-full">
        <CadastroUsuarioCard>
          <CadastroUsuarioForm/>
        </CadastroUsuarioCard>
      </div>
    );
  }