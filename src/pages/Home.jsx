import { useState } from "react";
import FlightsInputs from "../components/FlightsInputs"
import ListFlights from "../components/ListFlights"
import Navbar from "../components/Navbar"

const Home = () => {
  const [departDest, setDepartDest] = useState({
    departure: "",
    destination: "",
  });
  return (
    <div>
        <Navbar/>
        <FlightsInputs departDest={departDest} setDepartDest={setDepartDest}/>
        <ListFlights departDest={departDest} setDepartDest={setDepartDest}/>
    </div>
  )
}

export default Home