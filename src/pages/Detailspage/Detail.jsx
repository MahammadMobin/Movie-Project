import { useLoaderData } from "react-router-dom"
import { apiKey } from "../../constant/tmdbApiKey";
import { useEffect, useState } from "react";
import OneView from "../../components/OneView/OneView";
import { HiStar } from "react-icons/hi2";

const Detail = () => {

  const [img, setImg] = useState('')
  const [similar, setSimilar] = useState([])

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
      .then((res) => {
        setSimilar(res.results)
      })
      .catch((err) => console.log(err));
  }, [similar]);




  return (
    <div className=" overflow-y-scroll bgx h-screen w-full text-white " style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${img?.file_path})` }}>
      <div className="bgn w-full flex flex-col lg:p-10 ">
        <div className="flex justify-center items-center flex-col lg:flex-row lg:space-x-10 my-10 lg:my-20">
          <div className="min-w-[300px] mb-10 lg:mb-0 h-[400px]  rounded-lg bg-red-400 bgx" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${x?.poster_path})` }}></div>
          <div className="px-5 lg:px-0">
            <h1 className="text-5xl mb-5 font-bold max-w-2xl">{x?.title}</h1>
            <p className="my-2">{x?.release_date} | {x?.runtime} min | 1080P-FHD | <span className=" font-bold">Total View</span> : {x?.vote_count}</p>
            <p className="flex items-center"><HiStar className="text-3xl text-yellow-400 mb-2" /><span className="-mt-2 text-lg ml-1 font-bold">{x?.vote_average.toFixed(1)}</span></p>
            <p><span className="font-semibold">Original Title : </span><span>{x?.original_title}</span></p>
            <p className="my-2 text-gray-300 max-w-2xl">{x?.overview}</p>
            <p className="mb-2"><span className="font-semibold">Budget : </span><span className="font-base">{x?.budget}$</span></p>
            <div className="flex space-x-5 mb-2">
              <ul>
                <li className="font-bold">Genres :</li>
                {x.genres.map((one,i) => <li className="ml-5" key={i}>{one.name}</li>)}
              </ul>
              <ul>
                <li className="font-bold">Audio :</li>
                {x?.spoken_languages.map((one,i) => <li className="ml-5" key={i}>{one.english_name}</li>)}
              </ul>
            </div>
            <div className="ml-5">
              <h1 className="-ml-5 font-bold">Production Details</h1>
              <h1><span className="font-bold">Country :</span> {x.production_countries[0]?.name}</h1>
              <div className="flex flex-wrap justify-bettween max-w-2xl">
                {x?.production_companies.map((one) => {
                  return (
                    <p key={one?.id} className="font-semibold text-gray-300 mr-3">{one?.name},</p>
                  )
                })}
              </div>
            </div>
            <a href={x?.homepage} target="blank" className="btn btn-sm my-2">Get More Info</a>
          </div>
        </div>
        <div className="py-20">
          <h1 className="mb-20 font-bold text-5xl text-center">Related Movies</h1>
          <div className="flex gap-4 overflow-x-scroll flex-wrap justify-around">
            {similar?.map((one) => <OneView key={one.id} data={one} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail