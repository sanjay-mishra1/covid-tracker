import React from "react";
import numeral from "numeral";
import FullGraph from "./FullGraph";
import download from "../../images/download_icon.svg";
import { IconButton } from "@material-ui/core";
import Chart from "chart.js";

function PieGraph({ pieData, countryName, country, id }) {
  const getFileName = () => {
    return countryName + "covid-19 ";
  };
  const downloadClick = () => {
    var link = document.createElement("a");
    link.download = getFileName();
    link.href = document.getElementById(id).toDataURL();
    link.click();
  };
  const mapData = pieData.title
    ? pieData
    : {
        id: id,
        data: [
          { label: "Active", value: pieData[0] },
          { label: "Deaths", value: pieData[1] },
          { label: "Recovered", value: pieData[2] },
          { label: "Critical", value: pieData[3] },
        ],
        title: ["Active", "Deaths", "Recovered", "Critical"],
        colors: [
          "rgb(204, 16, 52)",
          "rgb(251, 68, 67)",
          "rgb(125, 215, 29)",
          "#ffeb3b",
        ],
      };
  return (
    <React.Fragment>
      <div className={"app_graph"}>
        <React.Fragment>
          <br />
          <DoughnutChart {...mapData} />
          {!pieData.title && (
            <React.Fragment>
              {" "}
              <IconButton onClick={downloadClick}>
                <img style={{ width: 18 }} src={download} alt="download" />
              </IconButton>
              <FullGraph
                data={mapData}
                cardTitle="Covid overall status"
                type="custom-pie"
                country={countryName}
              />
            </React.Fragment>
          )}
        </React.Fragment>
      </div>
    </React.Fragment>
  );
}

class DoughnutChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }
  componentDidUpdate() {
    this.myChart.data.labels = this.props.data.map((d) => d.label);
    this.myChart.data.datasets[0].data = this.props.data.map((d) => d.value);
    this.myChart.update();
  }
  componentDidMount() {
    var pieData = this.props.data;
    this.myChart = new Chart(this.chartRef.current, {
      type: "doughnut",
      options: {
        tooltips: {
          mode: "point",
          intersect: false,
          callbacks: {
            label: function (tooltipItem, data) {
              return (
                " " + numeral(pieData[tooltipItem.index].value).format("+0,0")
              );
            },
          },
        },
      },
      data: {
        labels: this.props.data.map((d) => d.label),
        datasets: [
          {
            data: this.props.data.map((d) => d.value),
            backgroundColor: this.props.colors,
          },
        ],
      },
    });
  }

  render() {
    return <canvas id={this.props.id} ref={this.chartRef} />;
  }
}

export default PieGraph;
