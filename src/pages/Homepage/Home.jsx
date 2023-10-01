import '../../App.css'
import LeftBar from '../../components/LeftBar/LeftBar'
import RightBar from '../../components/RightBar/RightBar'


const Home = () => {
  return (
    <div className="flex h-screen">
        <LeftBar/>
        <RightBar/>
    </div>
  )
}

export default Home