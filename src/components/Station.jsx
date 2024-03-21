import PropTypes from "prop-types";

function Station({ stations, searchTerm }) {
  const filteredStations = stations.filter((station) =>
    station.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="grid max-w-full grid-cols-1 gap-y-4 gap-x-4 md:grid-cols-2 lg:grid-cols-3 m-4">
        {filteredStations.map((station) => (
          <div
            className="bg-slate-400 p-4"
            style={{ background: "#" + station.color }}
            key={station.id}
          >
            <div className="flex" key={station.id}>
              <img
                className="w-28 h-28 rounded-md"
                src={station.image}
                alt={station.name}
              />

              <div className="p-4 w-full">
                <h2 className="text-xl font-bold m-2">{station.name}</h2>

                {/* <p className="mt-2">{station.tagline}</p> */}

                <audio className="mt-autobottom-0 w-full" controls>
                  <source src={station.liveaudio.url} type="audio/mpeg" />
                </audio>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

Station.propTypes = {
  stations: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default Station;
