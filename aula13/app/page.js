import Link from 'next/link';

export function Cabecalho() {
  return (
    <header>
      <h2>Next.js</h2>
      <nav style={{ display: 'flex', gap: '12px' }}>
        <Link href="/">Home</Link>
        <Link href="/rota1">Rota 1</Link>
        <Link href="/rota2">Rota 2</Link>
      </nav>
      <hr />
    </header>
  );
}

export function Rodape() {
  return (
    <footer>
      <hr />
      <p>Receita 13 - Programação Web</p>
    </footer>
  );
}

export default function Home() {
  return (
    <div>
      <Cabecalho />
      <h1>Página Inicial</h1>
      <p>Bem-vindo à aplicação Next.js da Receita 13!</p>
      <Rodape />
    </div>
  );
}
