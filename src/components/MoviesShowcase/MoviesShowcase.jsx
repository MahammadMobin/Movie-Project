import { useContext, useEffect, useState } from "react";
import { PopularMovie, TopMovie, UpComingMovie } from "../../constant/Constant";
import OneView from "../OneView/OneView";
import { MyMovieContext } from "../../context/MoveContext";

const MoviesShowcase = ({title,datas}) => {
  const [titleText,setTitleText]=useState('')
  const { searchText }=useContext(MyMovieContext)

  useEffect(()=>{
    if(title === PopularMovie){
      setTitleText("Popular Movies")
    }else if(title === TopMovie){
      setTitleText("Top Movies")
    }else if(title === UpComingMovie){
      setTitleText("Upcoming Movies")
    }else{
      setTitleText("New Movies")
    }
  },[title])


  return (
    <>
        <div className='text-center text-3xl mb-10 font-bold text-white'>{titleText}</div>
        {datas.length==0? <h1 className=" text-2xl text-center text-red-600">No information was found for the keyword <span className="font-bold">"{searchText}"</span></h1> : ""}
        <div className="flex flex-wrap gap-5 pb-24 px-5 justify-evenly">
        {datas.map((one)=><OneView key={one.id} data={one}/>)}
        </div>
    </>
  )
}

export default MoviesShowcase