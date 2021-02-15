import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import InfoBox from "../components/InfoBox";
import LineGraph from "../components/graph/LineGraph";
import Table from "../components/Table";
import { sortData, prettyPrintStat, getDate } from "../util";
import numeral from "numeral";
import Map from "../components/Map";
import "leaflet/dist/leaflet.css";
import CountryList from "../components/CountryList";
import CountryInfo from "../components/CountryInfo";
import News from "../components/News";
function Home({ caseProp, width }) {
  const [country, setInputCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [countries, setCountries] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState(caseProp);
  const [mapCenter, setMapCenter] = useState([34.80746, -40.4796]);
  const [mapZoom, setMapZoom] = useState(width === "xs" ? 2 : 3);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);
  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          let sortedData = sortData(data);
          setCountries(countries);
          setMapCountries(data);
          setTableData(sortedData);
        });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (e) => {
    let countryCode;
    if (e.target && e.target.value) countryCode = e.target.value;
    else countryCode = e;
    setInputCountry(countryCode);

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
        // setCasesType("cases");
        try {
          if (data.countryInfo.lat)
            setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
          else setMapCenter([34.80746, -40.4796]);
        } catch (err) {
          setMapCenter([34.80746, -40.4796]);
        }
        if (country === "worldwide") setMapZoom(width === "xs" ? 2 : 3);
        else setMapZoom(width === "xs" ? 2 : 4);
      });
  };

  return (
    <React.Fragment>
      <div className="home">
        <div className="app__left">
          <div
            className="app__header"
            //   style={width === "xs" ? { display: "inline" } : null}
          >
            <h1>COVID-19 Tracker</h1>
            <CountryList
              countries={countries}
              country={country}
              onCountryChange={onCountryChange}
            />
          </div>
          <div className="app__stats">
            <InfoBox
              onClick={(e) => setCasesType("cases")}
              title="Coronavirus Cases"
              isRed
              width={width}
              active={casesType === "cases"}
              cases={prettyPrintStat(countryInfo.todayCases)}
              total={numeral(countryInfo.cases).format("0,0")}
            />
            <InfoBox
              onClick={(e) => setCasesType("recovered")}
              title="Recovered"
              width={width}
              active={casesType === "recovered"}
              cases={prettyPrintStat(countryInfo.todayRecovered)}
              total={numeral(countryInfo.recovered).format("0,0")}
            />
            <InfoBox
              onClick={(e) => setCasesType("deaths")}
              title="Deaths"
              isRed
              width={width}
              active={casesType === "deaths"}
              cases={prettyPrintStat(countryInfo.todayDeaths)}
              total={numeral(countryInfo.deaths).format("0,0")}
            />
          </div>
          {countryInfo && countryInfo.updated && (
            <div>
              <Typography
                style={{ width: "fit-content", float: "right", marginTop: 8 }}
                color="textSecondary"
              >
                Last updated {" " + getDate(countryInfo.updated)}
              </Typography>
            </div>
          )}
          <Map
            countries={mapCountries}
            casesType={casesType}
            center={mapCenter}
            zoom={mapZoom}
            width={width}
            selectedCountry={country}
          />
        </div>
        {width === "xs" && <br />}
        {width === "xs" && (
          <CountryInfo
            casesType={casesType}
            country={country}
            countryInfo={countryInfo}
            width={width}
          />
        )}
        <Card className="app__right">
          <CardContent>
            <div className="app__information">
              <h3>Live {casesType} by country</h3>
              <Table
                setCountryChange={onCountryChange}
                casesType={casesType}
                countries={tableData}
              />
              <h3>Worldwide new {casesType}</h3>
              <LineGraph
                id="global-graph"
                casesType={casesType}
                countryName={
                  country === "worldwide" ? "Worldwide" : countryInfo.country
                }
              />
            </div>
          </CardContent>
        </Card>
      </div>
      {width !== "xs" && (
        <CountryInfo
          casesType={casesType}
          country={country}
          countryInfo={countryInfo}
          width={width}
        />
      )}
      <div
        style={{
          marginTop: "1rem",
          marginBottom: width === "xs" ? "1rem" : "0",
          marginLeft: width !== "xs" ? 35 : 20,
          marginRight: width !== "xs" ? 37 : 20,
        }}
      >
        <News
          country={country}
          countryName={countryInfo.country}
          caseType={casesType}
        />
      </div>
      <br />
      <br />
    </React.Fragment>
  );
}

export default Home;
