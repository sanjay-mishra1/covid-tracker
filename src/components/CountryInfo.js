import { Card, Divider, Grid, Typography } from "@material-ui/core";
import numeral from "numeral";
import React from "react";
import CountryProvinceTable from "./CountryProvinceTable";
import HorizontalBarGraph from "./graph/HorizontalBarGraph";
import LineGraph from "./graph/LineGraph";
import PieGraph from "./graph/PieGraph";
import VaccineGraph from "./graph/VaccineGraph";

function CountryInfo({ country, countryInfo, width, casesType }) {
  const [globalData, setGlobalData] = React.useState({});
  return (
    <React.Fragment>
      {country !== "worldwide" && countryInfo.countryInfo && (
        <Card
          style={{
            marginTop: "1rem",
            marginBottom: width === "xs" ? "1rem" : "0",
            marginLeft: width !== "xs" ? 35 : 0,
            marginRight: width !== "xs" ? 37 : 0,
          }}
        >
          <div style={{ display: "flex" }}>
            <img
              style={{ marginRight: 13, maxHeight: 106 }}
              src={countryInfo.countryInfo.flag}
              alt={countryInfo.country}
            />

            <div>
              <h3
                style={{ marginTop: -5, marginLeft: 0, padding: 0 }}
                className="card-title"
              >
                {countryInfo.country}
              </h3>
              <Grid container spacing={3}>
                <Grid item>
                  <Typography component="span" color="textSecondary">
                    Active
                  </Typography>{" "}
                  <Typography component="span">
                    {numeral(countryInfo.active).format("0,0")}
                  </Typography>{" "}
                </Grid>

                <Grid item>
                  <Typography component="span" color="textSecondary">
                    Critical
                  </Typography>{" "}
                  <Typography component="span">
                    {numeral(countryInfo.critical).format("0,0")}
                  </Typography>{" "}
                </Grid>
                <Grid item>
                  <Typography component="span" color="textSecondary">
                    Tests
                  </Typography>{" "}
                  <Typography component="span">
                    {numeral(countryInfo.tests).format("0,0")}
                  </Typography>{" "}
                </Grid>
                <Grid item>
                  <Typography component="span" color="textSecondary">
                    Active Per Million
                  </Typography>{" "}
                  <Typography component="span">
                    {numeral(countryInfo.activePerOneMillion).format("0,0")}
                  </Typography>{" "}
                </Grid>
                <Grid item>
                  <Typography component="span" color="textSecondary">
                    Deaths per Million
                  </Typography>{" "}
                  <Typography component="span">
                    {numeral(countryInfo.deathsPerOneMillion).format("0,0")}
                  </Typography>{" "}
                </Grid>
                <Grid item>
                  <Typography component="span" color="textSecondary">
                    Test per Million
                  </Typography>{" "}
                  <Typography component="span">
                    {numeral(countryInfo.testsPerOneMillion).format("0,0")}
                  </Typography>{" "}
                </Grid>
                <Grid item>
                  <Typography component="span" color="textSecondary">
                    Recovered per Million
                  </Typography>{" "}
                  <Typography component="span">
                    {numeral(countryInfo.recoveredPerOneMillion).format("0,0")}
                  </Typography>{" "}
                </Grid>
              </Grid>
            </div>
          </div>
          <Divider />
          <br />
          <div
            className="countryinfo"
            style={width !== "lg" ? { flexDirection: "column" } : null}
          >
            <Card
              className="app__information"
              style={{ flex: ".5", margin: 20 }}
              variant="outlined"
            >
              <h3
                style={{
                  height: "min-content",
                  alignSelf: "center",
                  marginLeft: "1rem",
                }}
              >
                {countryInfo.country} {" " + casesType}
              </h3>
              <Divider />
              <br />
              <LineGraph
                classname={"app_graph"}
                country={country}
                setGlobalData={setGlobalData}
                id="country-graph"
                casesType={casesType}
                countryName={countryInfo.country}
              />
            </Card>

            <Card
              style={{ flex: ".5", margin: 20 }}
              className="app__information"
              variant="outlined"
            >
              <h3
                style={{
                  height: "min-content",
                  alignSelf: "center",
                  marginLeft: "1rem",
                }}
              >
                {"Vaccination"}
              </h3>
              <Divider />
              <br />
              <VaccineGraph
                classname={"app_graph"}
                country={country}
                countryInfo={countryInfo}
                id={`${countryInfo.country}-vaccine-graph`}
                casesType={casesType}
                countryName={countryInfo.country}
              />
            </Card>
          </div>
          <div
            className="countryinfo"
            style={width !== "lg" ? { flexDirection: "column" } : null}
          >
            <Card
              style={{ flex: ".5", margin: 20 }}
              className="app__information"
              variant="outlined"
            >
              <h3
                style={{
                  height: "min-content",
                  alignSelf: "center",
                  marginLeft: "1rem",
                }}
              >
                {"Covid overall status"}
              </h3>
              <Divider />
              <br />
              <PieGraph
                classname={"app_graph"}
                country={country}
                pieData={[
                  countryInfo.active,
                  countryInfo.deaths,
                  countryInfo.recovered,
                  countryInfo.critical,
                  countryInfo.tests,
                ]}
                id={`${countryInfo.country}-pie-graph`}
                casesType={casesType}
                countryName={countryInfo.country}
              />
            </Card>

            <Card
              style={{ flex: ".5", margin: 20 }}
              className="app__information"
              variant="outlined"
            >
              <h3
                style={{
                  height: "min-content",
                  alignSelf: "center",
                  marginLeft: "1rem",
                }}
              >
                {"Covid Intensity"}
              </h3>
              <Divider />
              <br />
              <HorizontalBarGraph
                className={"app_graph"}
                country={country}
                caseType={casesType}
                data={globalData}
                id={`-${countryInfo.country}-intencity-graph`}
                casesType={casesType}
                countryName={countryInfo.country}
              />
            </Card>
          </div>

          <CountryProvinceTable
            countryName={countryInfo.country}
            countryShortName={countryInfo.countryInfo.iso3}
          />
        </Card>
      )}
    </React.Fragment>
  );
}

export default CountryInfo;
