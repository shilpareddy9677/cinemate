import { useSearchParams } from "react-router-dom"
import { Card } from "../component"
import  useFetch from "../hooks/useFetch"
import { useTitle } from "../hooks/useTitle"

export const Search=({apipath})=> {
  const [searchParams]=useSearchParams();
  const queryTerm =searchParams.get("q")
  const {data:movies}=useFetch(apipath,queryTerm)
  useTitle(`Search result for ${queryTerm} `)

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 ps-7 dark:text-white">{movies.length===0 ? `No result found for '${queryTerm}'`: `Result for '${queryTerm}'`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie)=>(
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}
