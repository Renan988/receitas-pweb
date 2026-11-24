import Link from 'next/link'

export default function NovaRotaLayout({ children }) {
  return (
    <div>
      <div>
        <strong>Submenu Nova Rota:</strong>{' '}
        <Link href="/novarota">Início</Link> |{' '}
        <Link href="/novarota/subrota1">Subrota 1</Link> |{' '}
        <Link href="/novarota/subrota2">Subrota 2</Link>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}
