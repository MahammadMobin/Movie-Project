import { useEffect, useState } from "react";
import { apiKey, getPosterPath } from "../../constant/tmdbApiKey";
import { Link } from 'react-router-dom'


// const url = 'https://image.tmdb.org/t/p/w300/'


const OneView = ({ data }) => {
    const { genre_ids } = data;
    const [genre, setGenre] = useState('')
    const [allGen, setAllGen] = useState([])
    const fullUrl = getPosterPath(300) + data.poster_path;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
            .then((res) => res.json())
            .then((res) => setAllGen(res.genres))
            .catch((err) => console.log(err));

    }, []);

    useEffect(() => {
        const temp = [];
        allGen.forEach(one => {
            genre_ids.filter((item) => {
                if (one.id === item) {
                    temp.push(one.name)
                }
            })
        })
        setGenre(temp)
    }, [allGen])


    return (
        <Link to={`/detail/${data?.id}`}>
            <div style={{
                backgroundImage: `url(${fullUrl})`
            }} className="w-[300px] bgx h-[400px] bg-pink-300 rounded-lg overflow-hidden">

                <div className=" transchild duration-500 flex justify-center bg-red-400 w-full h-full flex-col">
                    <div className="w-full flex justify-between items-center p-3 bg-pink-600">
                        <p className="text-white font-bold">{data?.title}</p>
                        <span className=" font-bold text-xs p-2 rounded-full bg-white text-black">{data?.vote_average}</span>
                    </div>
                    <div className="px-3">
                        <p className="text-white font-semibold">Release Date : {data?.release_date}</p>
                        <div className=" text-white space-x-1 mt-2 flex flex-wrap text-sm">
                            {genre && genre.map((one, i) => {
                                return (
                                    <span className="bg-zinc-700 px-2 py-[2px] mb-1 rounded-xl" key={i}>{one}</span>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default OneView