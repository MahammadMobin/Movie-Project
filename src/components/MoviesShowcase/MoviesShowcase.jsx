import { useEffect, useState } from "react";
import { PopularMovie, TopMovie, UpComingMovie } from "../../constant/Constant";
import OneView from "../OneView/OneView";

const MoviesShowcase = ({title,datas}) => {

  const [titleText,setTitleText]=useState('')

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
        <div className="flex flex-wrap gap-5 pb-24 px-5 justify-evenly">
        {datas.map((one)=><OneView key={one.id} data={one}/>)}
        </div>
    </>
  )
}

export default MoviesShowcase