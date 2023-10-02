import { createContext, useEffect, useState } from "react"
import { apiKey } from "../constant/tmdbApiKey";

export const MyMovieContext = createContext(null);



const MoveContext = ({ children }) => {

  const [navClickList, setNavClickList] = useState('popular');
  const [clickGenId,setClickGenId]=useState(0)
  const [searchText,setSearchText]=useState('')
  const [datas, setDatas] = useState([])

  // --------initial search-----------//
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${navClickList}?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((res) => setDatas(res.results))
      .catch((err) => console.log(err));
  }, [navClickList])

  const provideItems = { navClickList, setNavClickList, datas, setDatas, clickGenId, setClickGenId, searchText, setSearchText }


  return (
    <MyMovieContext.Provider value={provideItems} >
      {children}
    </MyMovieContext.Provider>
  )
}

export default MoveContext