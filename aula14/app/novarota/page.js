import { MenuPrincipal } from '../page';
import { MariaPrea, Subtitulo, Aviso } from './componentes';

export default function NovaRotaHome() {
  return (
    <div>
      <MenuPrincipal />
      <h1>Nova Rota, Nova Página</h1>
      <MariaPrea />
      <Subtitulo />
      <Aviso />
    </div>
  );
}
