import MovieForm from '../movieSearch/page'

export default function MoviesLayout({ children }) {
  return (
    <div>
      <MovieForm />
      <hr />
      {children}
    </div>
  )
}
