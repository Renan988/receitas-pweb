import Image from 'next/image'

export async function generateStaticParams() {
  return [
    { id: 'tt0095801' },
    { id: 'tt0033152' },
    { id: 'tt0041149' },
  ]
}

export default async function Home({ params }) {
  const { id } = await params
  const movie = await fetch(`https://www.omdbapi.com/?apikey=f1cbc41e&i=${id}`).then((res) =>
    res.json()
  )

  return (
    <div>
      <h1>
        {movie.Title} ({movie.Year})
      </h1>
      {movie.Poster && movie.Poster !== 'N/A' && (
        <Image src={movie.Poster} alt={movie.Title} width={300} height={450} unoptimized />
      )}
      <p>Director: {movie.Director}</p>
      <p>Plot: {movie.Plot}</p>
    </div>
  )
}
