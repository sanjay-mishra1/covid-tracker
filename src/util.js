import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";
const selectedCountryColor = "#0095ff";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 300,
  },
  recovered: {
    hex: "#7dd71d",
    rgb: "rgb(125, 215, 29)",
    half_op: "rgba(125, 215, 29, 0.5)",
    multiplier: 400,
  },
  deaths: {
    hex: "#fb4443",
    rgb: "rgb(251, 68, 67)",
    half_op: "rgba(251, 68, 67, 0.5)",
    multiplier: 2000,
  },
};
export const getBackgroundColor = (casesType) =>
  casesTypeColors[casesType].half_op;
export const getBorderColor = (casesType) => casesTypeColors[casesType].hex;
export const sortData = (data, casesType = "cases") => {
  let sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a[casesType] > b[casesType]) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

export const showDataOnMap = (data, casesType = "cases", selectedCountry) => {
  return data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={
        selectedCountry === country.countryInfo.iso2
          ? selectedCountryColor
          : casesTypeColors[casesType].hex
      }
      key={casesType + "" + country.country}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
};
export const getDate = (millis) => {
  var d = new Date(parseInt(millis.toString(), 10));
  var date = d.toString("MM/dd/yy HH:mm:ss");
  return date.substr(0, date.indexOf("GMT"));
};

export const buildChartData = (originalData, casesType, fromVaccine) => {
  let data = {};
  if (casesType === "default") data.default = originalData;
  else data = originalData;
  let chartData = [];
  let lastDataPoint;
  for (let date in data[casesType]) {
    if (lastDataPoint) {
      let pointDiff = Math.abs(data[casesType][date] - lastDataPoint);
      let newDataPoint = {
        x: date,
        y: pointDiff,
      };
      if (pointDiff <= 1000000 || fromVaccine) chartData.push(newDataPoint);
    }

    lastDataPoint = data[casesType][date];
  }
  return chartData;
};
