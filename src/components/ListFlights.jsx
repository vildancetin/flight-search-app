import axios from "axios";
import ListItem from "./ListItem";
import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";

const ListFlights = ({ departDest, setDepartDest ,way}) => {
  const url = "https://65b124d5d16d31d11bde2f0d.mockapi.io/locations";
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const isValidDepartDest = departDest.departure && departDest.destination;

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
            getFlights()
          }}
          disabled={!isValidDepartDest}
        >
          Search
        </button>
      </div>
      {!isValidDepartDest && (
        <div className="text-red-500 text-center mt-2">
          Please fill in all the required information.
        </div>
      )}

      {loading && <Spinner aria-label="Large spinner example" size="lg" />}
      {show && filteredFlights.map((item) => <ListItem {...item} way={way}/>)}
    </div>
  );
};

export default ListFlights;
