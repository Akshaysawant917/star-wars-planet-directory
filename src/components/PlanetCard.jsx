import React from "react";
import { Link } from "react-router-dom";

const PlanetCard = ({ planet }) => {
  return (
    <Link
      to={`/planets/${planet.name}`}
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 block transform transition duration-500 hover:scale-105 hover:shadow-2xl"
    >
      <h2 className="font-bold text-xl mb-2">{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Population: {planet.population}</p>
      <p>Terrain: {planet.terrain}</p>
    
    </Link>
  );
};

export default PlanetCard;
