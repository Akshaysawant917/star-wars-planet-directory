import React, { useEffect, useState } from "react";
import axios from "axios";
import PlanetCard from "../components/PlanetCard";

const PlanetsPage = () => {
  const [planets, setPlanets] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);

  console.log(planets);

  const fetchPlanets = async (url) => {
    try {
      const response = await axios.get(url);
      setPlanets(response.data.results);
      setNextPageUrl(response.data.next);
      setPrevPageUrl(response.data.previous);
    } catch (error) {
      console.error("Error fetching planets:", error);
    }
  };

  useEffect(() => {
    fetchPlanets("https://swapi.dev/api/planets/");
  }, []);

  const goToNextPage = () => nextPageUrl && fetchPlanets(nextPageUrl);
  const goToPrevPage = () => prevPageUrl && fetchPlanets(prevPageUrl);

  return (
    <div className="planets-page">
      <div className="grid lg:ml-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {planets.map((planet) => (
          <PlanetCard key={planet.name} planet={planet} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {prevPageUrl && (
          <button
            onClick={goToPrevPage}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Previous
          </button>
        )}
        {nextPageUrl && (
          <button
            onClick={goToNextPage}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default PlanetsPage;
