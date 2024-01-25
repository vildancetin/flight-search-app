import FlightsInputs from "../components/FlightsInputs"
import ListFlights from "../components/ListFlights"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <FlightsInputs/>
        <ListFlights/>
    </div>
  )
}

export default Home