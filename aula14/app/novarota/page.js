import { MenuPrincipal } from '../page';
import { MariaPrea, Subtitulo, Aviso, Cartao } from './componentes';

export default function NovaRotaHome() {
  return (
    <div>
      <MenuPrincipal />
      <h1>Nova Rota, Nova Página</h1>
      <MariaPrea mensagem="Ei, Maria Preá!" />
      <Cartao
        titulo="Aviso"
        descricao="Página da nova rota funcionando."
      />
      <Subtitulo />
      <Aviso />
    </div>
  );
}
