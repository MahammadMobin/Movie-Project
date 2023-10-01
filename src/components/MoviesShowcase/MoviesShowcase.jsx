import OneView from "../OneView/OneView";

const MoviesShowcase = ({title,datas}) => {
  return (
    <>
        <div className='text-center text-3xl my-10'>{title}</div>
        <div className="flex flex-wrap gap-5 pb-24 px-5 justify-evenly">
        {datas.map((one)=><OneView key={one.id} data={one}/>)}
        </div>
    </>
  )
}

export default MoviesShowcase