import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PlanetDetailPage = () => {
  const { planetName } = useParams();
  const [planet, setPlanet] = useState(null);
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const response = await axios.get(
          `https://swapi.dev/api/planets/?search=${planetName}`
        );
        const planetData = response.data.results[0];
        setPlanet(planetData);
        
        if (planetData.residents.length > 0) {
          const residentsPromises = planetData.residents.map((residentUrl) =>
            axios.get(residentUrl)
          );
          const residentsData = await Promise.all(residentsPromises);
          setResidents(residentsData.map((res) => res.data));
        }
      } catch (error) {
        console.error("Error fetching planet details:", error);
      }
    };

    fetchPlanet();
  }, [planetName]);

  if (!planet) return <div>Loading...</div>;

  return (
    <div className="planet-detail-page lg:w-[50%] m-auto text-center bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-3xl font-bold mb-4">{planet.name}</h1>
      <div>
        <h2 className="text-xl font-bold mb-2">Details:</h2>
        <p>Climate: {planet.climate}</p>
        <p>Population: {planet.population}</p>
        <p>Terrain: {planet.terrain}</p>
      </div>
      {residents.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-2">Residents:</h2>
          <ul>
            {residents.map((resident) => (
              <li key={resident.name}>{resident.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlanetDetailPage;
