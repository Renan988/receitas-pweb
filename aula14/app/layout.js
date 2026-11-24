export const metadata = {
  title: 'Aula 14 - Next.js',
  description: 'Receita 14: páginas e componentes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
