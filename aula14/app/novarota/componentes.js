export function MariaPrea({ mensagem = "Morreu Maria Preá..." }) {
  return (
    <h2>{mensagem}</h2>
  );
}

export function Cartao({ titulo, descricao }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  );
}

export function Subtitulo() {
  return (
    <h3>Componente reutilizável da Nova Rota</h3>
  );
}

export function Aviso() {
  return (
    <p>Este aviso vem do arquivo componentes.js!</p>
  );
}
