"use client"
import { memo, useCallback, useState } from "react"

export default function Home() {
  const [resultMovies, setResultMovies] = useState([])

  const handleAction = useCallback(async (titleSearchKey) => {
    const httpRes = await fetch(
      `https://www.omdbapi.com/?apikey=f1cbc41e&s=${encodeURIComponent(titleSearchKey)}`
    )
    const jsonRes = await httpRes.json()
    setResultMovies(jsonRes.Search || [])
  }, [])

  return (
    <div>
      <MovieForm handleAction={handleAction} />
      <MovieTable movies={resultMovies} />
    </div>
  )
}

const MovieForm = memo(function MovieForm({ handleAction }) {
  console.log("renderizando MovieForm")
  const [titleSearchKey, setTitleSearchKey] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!titleSearchKey.trim() || isLoading) return

    setIsLoading(true)
    try {
      await handleAction(titleSearchKey.trim())
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <label htmlFor="idTitleSearchKey">
        Título
        <input
          id="idTitleSearchKey"
          name="titleSearchKey"
          value={titleSearchKey}
          onChange={(e) => setTitleSearchKey(e.target.value)}
          placeholder="Ex: bagdad"
        />
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Pesquisando..." : "Pesquisar"}
      </button>
    </form>
  )
})

function MovieTable({ movies }) {
  console.log("renderizando MovieTable")

  if (movies.length === 0) {
    return <p>Nenhum filme para exibir.</p>
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
