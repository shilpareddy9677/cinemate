
import { Card } from "../component";
import useFetch from "../hooks/useFetch";
import {useTitle} from "../hooks/useTitle"

export const MovieList=({apipath,title}) =>{
  const {data:movies}=useFetch(apipath)
  const pateTitle = useTitle(title)

  return (
    <main>
        <section className="max-w-7xl mx-auto py-7">
              <div className="flex  flex-wrap justify-evenly">
                {movies.map((movie)=>(
                  <Card key={movie.id} movie={movie}/>
                ))}
              </div>
        </section>
    </main>
)
}
