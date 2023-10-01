import { useContext, useEffect, useState } from "react"
import { MyMovieContext } from "../../context/MoveContext"
import MoviesShowcase from "../MoviesShowcase/MoviesShowcase";

const RightBar = () => {

    const { navClickList, datas } = useContext(MyMovieContext)
    
    



    return (
        <div className="flex-1 flex-grow bg-pink-700 overflow-y-scroll">
            <MoviesShowcase title={navClickList} datas={datas}/>
        </div>
    )
}

export default RightBar