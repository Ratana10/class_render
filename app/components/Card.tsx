import React from "react";
import { CarItem } from "../type/CarItem";
const Card = ({car} : {car: CarItem}) => {
  return (

      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={car.image} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {car.make} {car.model}
          </div>
          <p className="text-gray-700 text-base">Year: {car.year}</p>
          <p className="text-base text-red-500 font-bold">${car.price}</p>
        </div>
      </div>

  );
};

export default Card;
