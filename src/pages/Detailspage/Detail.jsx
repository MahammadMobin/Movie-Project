import { useLoaderData } from "react-router-dom"
import { apiKey, getPosterPath } from "../../constant/tmdbApiKey";
import { useEffect, useState } from "react";
import OneView from "../../components/OneView/OneView";

const Detail = () => {

  const [img, setImg] = useState('')
  const [similar,setSimilar]=useState([])

  const x = useLoaderData()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${x.id}/images?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((res) => setImg(res.backdrops[0]))
      .catch((err) => console.log(err));
  }, [img]);

  useEffect(() => {
    fetch(` https://api.themoviedb.org/3/movie/${x.id}/similar?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((res) => setSimilar(res.results))
      .catch((err) => console.log(err));
  }, [similar]);


 

  return (
    <div className=" overflow-y-scroll bgx h-screen w-full text-white " style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${img?.file_path})` }}>
      <div className="bgn w-full flex flex-col p-10 ">
        <div className="flex items-center flex-col lg:flex-row lg:space-x-10 my-20">
          <div className="min-w-[300px] h-[400px]  rounded-lg bg-red-400 bgx" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${x?.poster_path})` }}></div>
          <div className="">
            <h1>{x?.original_title}</h1>
            <p>{x?.release_date} | {x?.runtime} min | 1080P-FHD | <span className=" font-bold">Total View</span> : {x?.vote_count}</p>
            <p>{x?.overview}</p>
            <h1>Extra info---------------</h1>
            <p>Budget : {x?.budget}$</p>
            <div className="flex space-x-5 bg-red-400">
              <ul>
                <li>Genres :</li>
                {x.genres.map((one) => <li key={one.id}>{one.name}</li>)}
              </ul>
              <ul>
                <li>Genres :</li>
                {x?.genres.map((one) => <li key={one.id}>{one.name}</li>)}
              </ul>
            </div>
            <div className=" bg-blue-600">
              <h1>Production Details</h1>
              <h1>Country : {x.production_countries[0]?.name}</h1>
              {x?.production_companies.map((one) => {
                return (
                  <div key={one?.id}>
                    <p>{one?.name}</p>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
        <div className="py-20">
          <h1>You may like</h1>
        <div className="flex gap-4 overflow-x-scroll flex-wrap justify-around">
          {similar?.map((one)=><OneView key={one.id} data={one}/>)}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Detail