import axios from "axios";
import { Flowbite, Label, TextInput, ToggleSwitch } from "flowbite-react";
import { Datepicker } from "flowbite-react";
import { useEffect, useState } from "react";

const FlightsInputs = ({departDest,setDepartDest}) => {
  const url = "https://65b124d5d16d31d11bde2f0d.mockapi.io/flights";

  const [airports, setAirpots] = useState([]);


  const [showSuggestions, setShowSuggestions] = useState({
    departure: false,
    destination: false,
  });
  const [way, setWay] = useState(false);
  const getAirports = async () => {
    try {
      const { data } = await axios(url);
      setAirpots(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAirports();
  }, []);
  // ? get inputs value
  const handleChange = (e) => {
    setDepartDest({ ...departDest, [e.target.name]: e.target.value });
    setShowSuggestions({ ...showSuggestions, [e.target.name]: true });
  };
console.log(departDest)
  const handleSelect = (item, type) => {
    setDepartDest({ ...departDest, [type]: `${item.code}` });
    setShowSuggestions({ ...showSuggestions, [type]: false });

  };
  const filterDeparture = airports.filter((item) =>
    item.name.toLowerCase().includes(departDest.departure.toLowerCase())
  );
  const filterDestination = airports.filter((item) =>
    item.name.toLowerCase().includes(departDest.destination.toLowerCase())
  );
  // ? create li part
  const createLi = (arr, type) => {
    return (
      <ul>
        {arr.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer p-5 border"
            onClick={() => handleSelect(item, type)}
          >
            {item.name}, {item.code}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="flex gap-4 justify-center">
        <button
          className="p-2 bg-blue-500 mt-5 rounded-xl text-white text-md bg-opacity-55 hover:bg-opacity-90"
          onClick={() => setWay(false)}
        >
          One Way
        </button>
        <button
          className="p-2 bg-blue-500 mt-5 rounded-xl text-white text-md bg-opacity-55 hover:bg-opacity-90"
          onClick={() => setWay(true)}
        >
          Rounded Trip
        </button>
      </div>
      <div className="flex justify-center gap-8 mb-5">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="departure" value="Departure" />
          </div>
          <TextInput
            id="departure"
            type="text"
            name="departure"
            sizing="md"
            className="w-[500px]"
            onChange={handleChange}
            value={departDest.departure}
          />
          {showSuggestions.departure && createLi(filterDeparture, "departure")}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="destination" value="Destination" />
          </div>
          <TextInput
            id="destination"
            type="text"
            name="destination"
            sizing="md"
            className="w-[500px]"
            onChange={handleChange}
            value={departDest.destination}
          />
          {showSuggestions.destination &&
            createLi(filterDestination, "destination")}
        </div>
      </div>
      <div className="flex justify-center gap-8">
        <div>
          <Label value="Departure Time" />
          <Datepicker className="w-[500px]"  />
        </div>
        {way ? (
          <div>
            <Label value="Destination Time" />
            <Datepicker className="w-[500px]"/>
          </div>
        ) : ( <div>
          <Label value="Destination Time" />
          <Datepicker className="w-[500px]" disabled/>
        </div>)}
      </div>

    </>
  );
};

export default FlightsInputs;
