

const url = 'https://image.tmdb.org/t/p/w300/'


const OneView = ({ data }) => {
    const fullUrl = url + data.poster_path;

    const handleClick=(val)=>{
        console.log(val);
    }


    return (
        <div onClick={()=>{handleClick(data)}} style={{
            backgroundImage: `url(${fullUrl})`
        }} className="w-[300px] bgx h-[400px] bg-pink-300 rounded-lg">

        </div>
    )
}

export default OneView