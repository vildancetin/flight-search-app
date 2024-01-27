import { useState } from "react";
import FlightsInputs from "../components/FlightsInputs"
import ListFlights from "../components/ListFlights"
import Navbar from "../components/Navbar"

const Home = () => {
  const [departDest, setDepartDest] = useState({
    departure: "",
    destination: "",
    departureTime:"",
    destinationTime:""
  });
  const [way, setWay] = useState(false);

  return (
    <div>
        <Navbar/>
        <FlightsInputs departDest={departDest} setDepartDest={setDepartDest} way={way} setWay={setWay}/>
        <ListFlights departDest={departDest} setDepartDest={setDepartDest} way={way} setWay={setWay}/>
    </div>
  )
}

export default Home