import Link from 'next/link';
import { MariaPrea, Aviso, Cartao } from '../componentes';

export default function Subrota2() {
  return (
    <div>
      <h1>Subrota 2 (dentro de novarota)</h1>
      <MariaPrea mensagem="Testando na subrota 2" />
      <Cartao
        titulo="Sobre"
        descricao="Conteúdo da segunda subrota."
      />
      <Aviso />
      <Link href="/novarota">Voltar para Nova Rota</Link>
    </div>
  );
}
