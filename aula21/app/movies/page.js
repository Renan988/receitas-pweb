import Link from 'next/link'
import Form from 'next/form'

export default async function MoviesPage({ searchParams }) {
  const resolvedParams = await searchParams
  const titleSearchKey = resolvedParams.titleSearchKey?.trim() || 'bagdad'

  const res = await fetch(
    `https://www.omdbapi.com/?apikey=f1cbc41e&s=${encodeURIComponent(titleSearchKey)}`
  )
  const data = await res.json()

  return (
    <div>
      <Form action="/movies">
        <label htmlFor="idTitleSearchKey">Título: </label>
        <input
          id="idTitleSearchKey"
          name="titleSearchKey"
          defaultValue={titleSearchKey}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <h2>Resultados para &quot;{titleSearchKey}&quot;</h2>
      <div>
        {(data.Search || []).map((m) => (
          <div key={m.imdbID}>
            <Link href={`/movie/${m.imdbID}`}>
              {m.Title} --- {m.Year}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
