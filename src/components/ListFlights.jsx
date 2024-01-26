import axios from "axios";
import ListItem from "./ListItem";
import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";

const ListFlights = ({ departDest, setDepartDest }) => {
  const url = "https://65b124d5d16d31d11bde2f0d.mockapi.io/locations";
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const getFlights = async () => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      setLocations(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getFlights();
  }, []);
  console.log(locations);

  const filteredFlights = locations.filter(
    (flight) =>
      flight.departureAirport === departDest.departure &&
      flight.destinationAirport === departDest.destination
  );
  console.log(filteredFlights);
  return (
    <div>
      <div className="flex justify-center">
        <button
          className="p-2 px-6 bg-blue-500 mt-5 rounded-xl text-white text-lg
 hover:bg-opacity-90"
 onClick={() => {
            setShow(true);
           
          }}
        >
          Search
        </button>
      </div>
      {loading && <Spinner aria-label="Large spinner example" size="lg" />}
      {show && filteredFlights.map((item) => <ListItem {...item} />)}
    </div>
  );
};

export default ListFlights;
