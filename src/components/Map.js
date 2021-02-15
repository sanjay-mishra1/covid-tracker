import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "../css/Map.css";
import { showDataOnMap } from "../util";
function Map(props) {
  const { countries, casesType, center, zoom, selectedCountry, width } = props;
  const [mapCenter, setMapCenter] = React.useState(center);
  const [mapZoom, setMapZoom] = React.useState(zoom);
  React.useEffect(() => {
    setMapCenter(center);
    if (center[0] === 34.80746) setMapZoom(3);
    else setMapZoom(4);
  }, [center]);

  return (
    <div
      className="map"
      style={width === "xs" ? { height: 345 } : null}
      key={mapCenter}
    >
      <MapContainer scrollWheelZoom={false} center={mapCenter} zoom={mapZoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType, selectedCountry)}
      </MapContainer>
    </div>
  );
}

export default Map;
