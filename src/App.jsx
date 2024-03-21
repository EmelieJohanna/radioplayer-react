import { useState, useEffect } from "react";
import Station from "./components/Station";
import Search from "./components/Search";
import "react-loading-skeleton/dist/skeleton.css";
import Skeletons from "./components/Skeletons";

function App() {
  const [stations, setStations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 2000;

    setTimeout(() => {
      fetch("https://api.sr.se/api/v2/channels?format=json&size=100")
        .then((result) => result.json())
        .then((data) => {
          console.log(data);
          setStations(data.channels);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    }, delay);
  }, []);

  const filteredStations = stations.filter((station) =>
    station.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Search onChange={setSearchTerm} stations={stations} />
      {isLoading ? (
        <Skeletons />
      ) : (
        <Station stations={filteredStations} searchTerm={searchTerm} />
      )}
    </>
  );
}

export default App;
