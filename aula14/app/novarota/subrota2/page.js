import Link from 'next/link';
import { MariaPrea, Aviso } from '../componentes';

export default function Subrota2() {
  return (
    <div>
      <h1>Subrota 2 (dentro de novarota)</h1>
      <MariaPrea />
      <Aviso />
      <Link href="/novarota">Voltar para Nova Rota</Link>
    </div>
  );
}
