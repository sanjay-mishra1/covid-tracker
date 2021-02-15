import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import { getBackgroundColor, buildChartData, getBorderColor } from "../../util";
import FullGraph from "./FullGraph";
import download from "../../images/download_icon.svg";
import { Button, IconButton } from "@material-ui/core";
import DaysSelector from "./DaysSelector";
const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: true,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

function LineGraph({ casesType, country, countryName, id, setGlobalData }) {
  const [data, setData] = useState({});
  const [currentCountry, setCurrentCountry] = useState("");
  const [currentData, setCurrentData] = useState({});
  const [days, setDays] = useState("120");
  useEffect(() => {
    if (currentCountry !== country) {
      const fetchData = async () => {
        let url;
        if (country && country !== "worldwide")
          url = `https://disease.sh/v3/covid-19/historical/${country}?lastdays=120`;
        else url = "https://disease.sh/v3/covid-19/historical/all?lastdays=120";
        await fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            if (!data.hasOwnProperty("message")) {
              if (country && country !== "worldwide") data = data.timeline;
              setCurrentData(data);
              setCurrentCountry(country);
              if (setGlobalData) setGlobalData(data);
              let chartData = buildChartData(data, casesType);
              setData(chartData);
            } else setData(null);
          })
          .catch((err) => {
            return <p>No data found</p>;
          });
      };

      fetchData();
    } else {
      let chartData = buildChartData(currentData, casesType);
      setData(chartData);
    }
  }, [country]);
  useEffect(() => {
    if (currentCountry !== country) {
      handleMonthClick(120);
      // fetchData();
    } else {
      let chartData = buildChartData(currentData, casesType);
      setData(chartData);
    }
  }, [casesType]);

  const getFileName = () => {
    if (id.includes("global")) return "worldwide " + casesType;
    else
      return (
        (country === "worldwide" ? "global " : countryName) + " " + casesType
      );
  };
  const downloadClick = () => {
    var link = document.createElement("a");
    link.download = getFileName();
    link.href = document.getElementById(id).toDataURL();
    link.click();
  };
  const handleMonthClick = async (totalDays) => {
    let url;
    setDays(totalDays);
    if (country && country !== "worldwide")
      url = `https://disease.sh/v3/covid-19/historical/${country}?lastdays=${totalDays}`;
    else
      url = `https://disease.sh/v3/covid-19/historical/all?lastdays=${totalDays}`;
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (!data.hasOwnProperty("message")) {
          if (country && country !== "worldwide") data = data.timeline;
          setCurrentData(data);
          if (setGlobalData) setGlobalData(data);
          setCurrentCountry(country);
          let chartData = buildChartData(data, casesType);
          setData(chartData);
        } else setData(null);
      })
      .catch((err) => {
        setData(null);
        return <p>No data found</p>;
      });
  };

  return (
    <React.Fragment>
      {data && data.length > 0 ? (
        <React.Fragment>
          <div className={"app_graph"}>
            <DaysSelector days={days} handleMonthClick={handleMonthClick} />
            <Line
              id={id}
              data={{
                datasets: [
                  {
                    backgroundColor: getBackgroundColor(casesType),
                    borderColor: getBorderColor(casesType),
                    data: data,
                  },
                ],
              }}
              options={options}
            />
          </div>
          <IconButton onClick={downloadClick}>
            <img style={{ width: 18 }} src={download} alt="download" />
          </IconButton>
          <FullGraph
            country={countryName}
            data={currentData}
            id={"fullgraph-" + id}
          />
        </React.Fragment>
      ) : (
        <p className="error-message">No data found</p>
      )}
    </React.Fragment>
  );
}

export default LineGraph;
