import { useState } from "react";

const ListItem = ({
  departureAirport,
  destinationAirport,
  departureTime,
  arrivalTime,
  duration,
  price,
  name,
  code,
  flightNumber,
  flightclass,
  availableSeats,
  way,
}) => {
  const [detail, setDetail] = useState(false);
  return (
    <div>
      <div className="flex h-40 shadow-xl mt-6 w-5/6 mx-auto my-8">
        <div className="w-1/4 bg-blue-500 flex flex-col justify-center items-center text-white text-xl ">
          <span>{code}</span>
          <span>{name}</span>
        </div>
        <div className="w-1/2 flex justify-between items-center px-6 text-xl ">
          <div className="flex flex-col">
            <span>{departureTime}</span>
            <span>{departureAirport}</span>
          </div>

          <div className="border-t-2 border-blue-500 w-full mx-8 text-center">
            {duration}
          </div>

          <div className="flex flex-col">
            <span>{arrivalTime}</span>
            <span>{destinationAirport}</span>
          </div>
        </div>
        <div className="w-1/4  bg-blue-500 flex flex-col justify-center items-center text-white text-xl">
          ${way ? price*2 :price}  
          <button
            className="mx-8 bg-white text-blue-500 p-2 rounded-xl mt-4"
            onClick={() => {
              setDetail(!detail);
            }}
          >
            Details
          </button>
        </div>
      </div>
      {detail && (
        <div className="flex h-20 shadow-lg w-5/6 mx-auto bg-blue-500 text-white justify-evenly items-center pl-10 font-bold">
          <div className="flex-1">Class : {flightclass}</div>
          <div className="flex-1">Flight Number : {flightNumber}</div>
          <div className="flex-1">Avaliable Seats : {availableSeats}</div>
        </div>
      )}
    </div>
  );
};

export default ListItem;
