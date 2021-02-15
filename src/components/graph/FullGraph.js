import {
  Card,
  CardContent,
  Dialog,
  DialogContent,
  Divider,
  IconButton,
} from "@material-ui/core";
import React from "react";
import { Line } from "react-chartjs-2";
import fullscreen from "../../images/fullscreen.svg";
import closeIcon from "../../images/close.svg";
import numeral from "numeral";
import { buildChartData, getBackgroundColor, getBorderColor } from "../../util";
import download from "../../images/download_icon.svg";
import HorizontalBarGraph from "./HorizontalBarGraph";
import PieGraph from "./PieGraph";

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
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

function FullGraph({
  data,
  country,
  id,
  type = "default",
  defaultColorType = "cases",
  cardTitle,
}) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const getFileName = (casesType) => {
    if (id.includes("global")) return "worldwide " + casesType;
    else
      return (country === "worldwide" ? "global " : country) + " " + casesType;
  };
  const downloadClick = (caseType) => {
    var link = document.createElement("a");
    link.download = getFileName(caseType);
    link.href = document.getElementById(id + "-" + caseType).toDataURL();
    link.click();
  };
  const getCustomGraph = () => {
    if (type.includes("bar"))
      return (
        <React.Fragment>
          {casesTypes.map((caseType) =>
            setChartView(
              caseType,
              <HorizontalBarGraph
                className={"app_graph"}
                country={country}
                caseType={caseType}
                data={data}
                id={id + "-" + caseType}
                type="custom"
                casesType={caseType}
                countryName={country}
              />
            )
          )}
        </React.Fragment>
      );
    else if (type.includes("line"))
      return setChartView(
        "",
        <Line
          id={id + "-"}
          data={{
            datasets: [
              {
                backgroundColor: getBackgroundColor(defaultColorType),
                borderColor: getBorderColor(defaultColorType),
                data: data,
              },
            ],
          }}
          options={options}
        />
      );
    else if (type.includes("pie"))
      return setChartView(" ", <PieGraph pieData={data} id={id + "-"} />);
  };
  const setChartView = (caseType, child) => {
    return (
      <Card
        key={caseType}
        variant="outlined"
        style={{ margin: 10, maxHeight: "70%" }}
      >
        <CardContent style={{ padding: 0 }}>
          <div className="app__information graph-head">
            <h3
              style={{
                height: "min-content",
                alignSelf: "center",
                marginLeft: "1rem",
                flex: 1.9,
              }}
            >
              {cardTitle}
              {caseType.substring(0, 1).toUpperCase() + caseType.substring(1)}
            </h3>
            <IconButton
              style={{ height: 40 }}
              onClick={() => downloadClick(caseType)}
            >
              <img style={{ width: 18 }} src={download} alt="download" />
            </IconButton>
          </div>
        </CardContent>
        <Divider />
        <br />
        {child}
      </Card>
    );
  };
  const casesTypes = ["cases", "recovered", "deaths"];
  return (
    <React.Fragment>
      <IconButton style={{ float: "right" }} onClick={handleClick}>
        <img style={{ width: 18 }} src={fullscreen} alt="fullscreen" />
      </IconButton>

      <Dialog fullScreen open={open} onClose={handleClose}>
        <div style={{ display: "flex" }}>
          <p
            style={{
              placeSelf: "center",
              flex: "0.9 100%",
              margin: 16,
              fontSize: "x-large",
            }}
          >
            {country}
          </p>

          <IconButton
            style={{ height: "fit-content", placeSelf: "center" }}
            onClick={handleClose}
          >
            <img style={{ width: 18 }} src={closeIcon} alt="close" />
          </IconButton>
        </div>
        <Divider />

        <DialogContent>
          <div>
            {data &&
              (type.includes("custom")
                ? getCustomGraph()
                : casesTypes.map((caseType) =>
                    setChartView(
                      caseType,
                      <Line
                        id={id + "-" + caseType}
                        data={{
                          datasets: [
                            {
                              backgroundColor: getBackgroundColor(caseType),
                              borderColor: getBorderColor(caseType),
                              data: buildChartData(data, caseType),
                            },
                          ],
                        }}
                        options={options}
                      />
                    )
                  ))}
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default FullGraph;
