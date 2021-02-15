import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import { getBackgroundColor, buildChartData, getBorderColor } from "../../util";
import FullGraph from "./FullGraph";
import download from "../../images/download_icon.svg";
import { IconButton } from "@material-ui/core";
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

function VaccineGraph({ country, countryName, id, setGlobalData }) {
  const [data, setData] = useState({});
  const [currentCountry, setCurrentCountry] = useState("");
  const [currentData, setCurrentData] = useState({});
  const [days, setDays] = useState("120");
  useEffect(() => {
    if (currentCountry !== country) {
      fetchData(days);
    } else {
      let chartData = buildChartData(currentData, "default");
      setData(chartData);
    }
  }, [country]);
  useEffect(() => {
    fetchData(days);
  }, [days]);

  const getFileName = () => {
    if (id.includes("global"))
      return "worldwide vaccination for last " + days + " days";
    else
      return (
        (country === "worldwide" ? "global " : countryName) +
        " for last " +
        days +
        " days"
      );
  };
  const downloadClick = () => {
    var link = document.createElement("a");
    link.download = getFileName();
    link.href = document.getElementById(id).toDataURL();
    link.click();
  };
  const handleMonthClick = (days) => {
    setDays(days);
  };
  const fetchData = async (totalDays) => {
    let url;
    if (country !== "worldwide")
      url = `
    https://disease.sh/v3/covid-19/vaccine/coverage/countries/${country}?lastdays=${days}`;
    else
      url = `https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=${days}`;
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (country !== "worldwide") data = data.timeline;
        setCurrentData(data);
        if (setGlobalData) setGlobalData(data);
        setCurrentCountry(country);
        let chartData = buildChartData(data, "default", true);
        setData(chartData);
      })
      .catch((err) => {
        return <p>No data found</p>;
      });
  };

  return (
    <React.Fragment>
      <div className={"app_graph"}>
        {data.length > 0 ? (
          <React.Fragment>
            <DaysSelector days={days} handleMonthClick={handleMonthClick} />
            <br />
            <Line
              id={id}
              data={{
                datasets: [
                  {
                    backgroundColor: getBackgroundColor("recovered"),
                    borderColor: getBorderColor("recovered"),
                    data: data,
                  },
                ],
              }}
              options={options}
            />
          </React.Fragment>
        ) : (
          <p className="error-message">No data found</p>
        )}
      </div>
      <IconButton onClick={downloadClick}>
        <img style={{ width: 18 }} src={download} alt="download" />
      </IconButton>
      <FullGraph
        country={countryName}
        type="custom-line"
        data={data}
        cardTitle="Vaccination"
        caseType=""
        defaultColorType="recovered"
        id={"vaccinegraph-" + id}
      />
    </React.Fragment>
  );
}

export default VaccineGraph;
