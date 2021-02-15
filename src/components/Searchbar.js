import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Close from "../images/close.svg";
import SearchIcon from "../images/search.svg";
// import DirectionsIcon from "@material-ui/icons/Directions";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    // width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function Searchbar({ setFilterText, filterText }) {
  const classes = useStyles();
  const handleChange = (event) => {
    setFilterText(event.target.value);
  };
  const removeFilter = () => {
    setFilterText("");
  };
  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <img src={SearchIcon} alt="Search" style={{ width: 16 }} />
      </IconButton>
      <InputBase
        className={classes.input}
        onChange={handleChange}
        value={filterText}
        placeholder="Search Country"
        inputProps={{ "aria-label": "search country" }}
      />
      <IconButton
        className={classes.iconButton}
        aria-label="search"
        disabled
      ></IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        color="primary"
        className={classes.iconButton}
        aria-label="directions"
        onClick={removeFilter}
      >
        <img src={Close} alt="remove" style={{ width: 16 }} />
      </IconButton>
    </Paper>
  );
}
