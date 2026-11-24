import Link from 'next/link';
import { MariaPrea, Subtitulo, Aviso } from './componentes';

export default function NovaRotaHome() {
  return (
    <div>
      <h1>Nova Rota, Nova Página</h1>
      <MariaPrea />
      <Subtitulo />
      <Aviso />
      <nav style={{ display: 'flex', gap: '12px' }}>
        <Link href="/">Início</Link>
        <Link href="/novarota/subrota1">Ir para Subrota 1</Link>
        <Link href="/novarota/subrota2">Ir para Subrota 2</Link>
      </nav>
    </div>
  );
}
