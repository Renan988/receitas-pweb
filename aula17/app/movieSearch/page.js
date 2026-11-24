import Form from 'next/form'

export default async function MovieForm() {
  return (
    <Form action="/movies" className="search-form">
      <label htmlFor="idTitleSearchKey">
        Título
        <input id="idTitleSearchKey" name="titleSearchKey" placeholder="Ex: batman" />
      </label>

      <label htmlFor="idType">
        Tipo
        <select id="idType" name="type" defaultValue="">
          <option value="">Todos</option>
          <option value="movie">Filme</option>
          <option value="series">Série</option>
          <option value="episode">Episódio</option>
        </select>
      </label>

      <label htmlFor="idYear">
        Ano
        <input id="idYear" name="year" placeholder="Ex: 2005" />
      </label>

      <button type="submit">Pesquisar</button>
    </Form>
  )
}
