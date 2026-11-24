import Link from 'next/link';

export function MenuPrincipal() {
  return (
    <nav style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
      <Link href="/">Início</Link>
      <Link href="/novarota">Nova Rota</Link>
      <Link href="/novarota/subrota1">Subrota 1</Link>
      <Link href="/novarota/subrota2">Subrota 2</Link>
    </nav>
  );
}

export default function Home() {
  return (
    <div>
      <h1>Página Inicial - Aula 14</h1>
      <MenuPrincipal />
    </div>
  );
}
