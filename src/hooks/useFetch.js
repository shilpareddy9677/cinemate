import { useEffect,useState } from "react"

export default function useFetch(apipath,queryTerm="") {
  const [data,setData]=useState([])
  const url=`https://api.themoviedb.org/3/${apipath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`
  useEffect(()=>{
    async function fetchMovies(){
        const response=await fetch(url);
        const json = await response.json();
        setData(json.results)
    }
    fetchMovies();
  },[url])

  return {data}
}
