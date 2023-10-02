import { useContext, useEffect, useState } from "react";
import { HiForward } from "react-icons/hi2";
import { apiKey } from "../../constant/tmdbApiKey";
import { MyMovieContext } from "../../context/MoveContext";

const LeftBar = () => {
  const [datasn, setDatasn] = useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const {setDatas,datas}=useContext(MyMovieContext);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((res) => setDatasn(res.genres))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (id,index) => {
    setActiveItem(index);
    console.log(id);
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}`)
      .then((res) => res.json())
      .then((res) => setDatas(res.results))
      .catch((err) => console.log(err));
  };

  return (
    <div className=" w-[300px] bg-zinc-900 text-gray-400 overflow-y-scroll hidden md:flex flex-col items-center">
      <a className=" sticky top-0 bg-zinc-900 w-full rounded-none btn btn-ghost normal-case text-xl">
        <HiForward className="text-3xl text-pink-600" />MOV-X GENRES
      </a>
      <ul className="p-2 bg-zinc-900 pb-14 space-y-2 w-full flex flex-col justify-center items-center">
        {datasn.map((one, index) => (
          <li
            onClick={() => handleClick(one.id,index)}
            className={`nav__link w-full cursor-pointer font-semibold rounded-md text-center p-2 bg-black ${
              index === activeItem ? "activeLink" : ""
            }`}
            key={one.id}
          >
            {one.name}
          </li>
        ))}
        <li>a</li>
      </ul>
    </div>
  );
};

export default LeftBar;
