export default async function Home({ searchParams }) {
  const { titleSearchKey = 'bagdad', type = '', year = '' } = await searchParams

  const params = new URLSearchParams({
    apikey: 'f1cbc41e',
    s: titleSearchKey,
  })
  if (type) params.set('type', type)
  if (year) params.set('y', year)

  const res = await fetch(`http://www.omdbapi.com/?${params.toString()}`)
  const data = await res.json()

  return (
    <div>
      <h2>Resultados para &quot;{titleSearchKey}&quot;</h2>
      <div className="movies-grid">
        {(data.Search || []).map((m) => (
          <div className="movie-card" key={m.imdbID}>
            {m.Poster && m.Poster !== 'N/A' && (
              <img src={m.Poster} alt={m.Title} />
            )}
            <div className="movie-title">{m.Title}</div>
            <div className="movie-meta">
              {m.Year} &middot; {m.Type}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
