"use client"
import { searchMovies } from "../actions/movieActions"
import Form from "next/form"
import { useState } from "react"

export default function Home() {
  const [data, setData] = useState({})

  async function handleAction(formData) {
    const res = await searchMovies(formData)
    setData(res)
  }

  return (
    <div>
      <MovieForm actionHandler={handleAction} />
      {data.error && <p>{data.error}</p>}
      {data.Response === "False" && <p>Nenhum resultado encontrado ({data.Error}).</p>}
      {data.Search && <MovieTable movies={data.Search} />}
    </div>
  )
}

function MovieForm({ actionHandler }) {
  return (
    <Form action={actionHandler} className="search-form">
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

function MovieTable({ movies }) {
  if (movies.length === 0) {
    return <p>Nenhum filme encontrado.</p>
  }

  return (
    <table className="movies-table">
      <thead>
        <tr>
          <th>Pôster</th>
          <th>Título</th>
          <th>Ano</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((m) => (
          <tr key={m.imdbID}>
            <td>
              {m.Poster && m.Poster !== "N/A" ? (
                <img src={m.Poster} alt={m.Title} />
              ) : (
                "-"
              )}
            </td>
            <td>{m.Title}</td>
            <td>{m.Year}</td>
            <td>{m.Type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
