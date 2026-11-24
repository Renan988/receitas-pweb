import Link from 'next/link';
import { Subtitulo, Aviso } from '../componentes';

export default function Subrota1() {
  return (
    <div>
      <h1>Subrota 1 (dentro de novarota)</h1>
      <Subtitulo />
      <Aviso />
      <Link href="/novarota">Voltar para Nova Rota</Link>
    </div>
  );
}
