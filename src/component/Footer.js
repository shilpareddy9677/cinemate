import { Link  } from "react-router-dom"
export const Footer=() =>{
  return (
    
<footer className="bg-white shadow  dark:bg-gray-800">
    <div className="w-full mx-auto  p-4 md:flex md:items-center md:justify-between dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Cinemate</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6 dark:hover:text-white ">Instagram</a>
        </li>
        <li>
            <a href="#" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6 dark:hover:text-white">Linkedin</a>
        </li>
        <li>
            <a href="#" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6 dark:hover:text-white">Github</a>
        </li>
        <li>
            <a href="#" target="_blank" rel="noreferrer" className="hover:underline dark:hover:text-white">Youtube</a>
        </li>
    </ul>
    </div>
</footer>

  
  )
}
