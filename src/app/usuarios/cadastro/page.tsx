import { CadastroUsuarioCard } from "./components/cards/cadastro.usuario.card";
import { CadastroUsuarioForm } from "./components/forms/cadastro.usuario.form";


export default function CadastroUsuarios() {
    return (
      <div className="p-1">
        <CadastroUsuarioCard>
          <CadastroUsuarioForm/>
        </CadastroUsuarioCard>
      </div>
    );
  }