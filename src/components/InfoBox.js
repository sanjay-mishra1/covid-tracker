import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "../css/InfoBox.css";

function InfoBox({ width, title, cases, total, active, isRed, ...props }) {
  const fontSize = width === "xs" ? { fontSize: "1.45rem" } : null;
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2
          style={fontSize}
          className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}
        >
          {cases}
        </h2>

        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
