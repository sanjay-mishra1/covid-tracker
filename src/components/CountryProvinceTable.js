import React from "react";
import "../css/Table.css";
import numeral from "numeral";
import { Divider } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";

import Paper from "@material-ui/core/Paper";

function CountryProvinceTable({ countryName, countryShortName }) {
  const [filterText, setFilterText] = React.useState("");
  const [filteredData, setFilteredData] = React.useState({});
  const [data, setData] = React.useState([]);
  const [currentcountryName, setCurrentcountryName] = React.useState();

  const customizeData = (data) => {
    if (!data || data.length <= 1) {
      setFilteredData({});
      return;
    }
    let stateData = {};
    //setting keys
    stateData.keys = [
      { label: "STATE", color: "#000000", id: "province" },
      { label: "TOTAL CASES", color: "rgb(204, 16, 52)", id: "confirmed" },
      { label: "NEW CASES", color: "rgb(204, 16, 52)", id: "confirmed_diff" },
      { label: "ACTIVE CASES", color: "rgb(204, 16, 52)", id: "active" },
      { label: "TOTAL DEATHS", color: "rgb(251, 68, 67)", id: "deaths" },
      { label: "NEW DEATHS", color: "rgb(251, 68, 67)", id: "deaths_diff" },
      {
        label: "CASE FATALITY RATE",
        color: "#000000",
        id: "Case_Fatality_Rate",
      },
      { label: "TOTAL RECOVERED", color: "rgb(0 201 25)", id: "recovered" },
      {
        label: "RECOVERY PERCENTAGE",
        color: "#000000",
        id: "Recovery_Proporation",
      },
    ];
    //remove reports

    stateData.values = [];
    data.forEach((state) => stateData.values.push(setFieldData(state)));
    setFilteredData(stateData);
  };
  const setFieldData = (state) => {
    var rowData = {};

    //state
    rowData.province = state.province;
    //total case
    rowData.confirmed = state.confirmed;
    //new case
    rowData.confirmed_diff = state.confirmed_diff;
    //active case
    rowData.active = state.active;
    //total deaths
    rowData.deaths = state.deaths;
    //new deaths
    rowData.deaths_diff = state.deaths_diff;
    //cfr
    rowData.Case_Fatality_Rate = state.Case_Fatality_Rate;
    //total recovered
    rowData.recovered = state.recovered;
    //reco perc
    rowData.Recovery_Proporation = state.Recovery_Proporation;

    return rowData;
  };
  React.useEffect(() => {
    if (currentcountryName !== countryName) {
      setCurrentcountryName(countryName);
      const fetchData = async () => {
        let url;
        url = `https://vaccovid.live/api/api-covid-data/provinces-report-iso-based/${countryShortName}`;
        await fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            customizeData(data);
          })
          .catch((err) => {
            return <p>No data found</p>;
          });
      };

      fetchData();
    } else {
      setFilteredData(filteredData);
    }
  }, [countryName]);
  React.useEffect(() => {
    const setData = () => {
      if (filterText === "") {
        setFilteredData(data.map((item) => item));
        return;
      }

      setFilteredData(
        data.filter((item) =>
          item.country.toUpperCase().startsWith(filterText.toUpperCase())
        )
      );
    };
    setData();
  }, [filterText]);
  return (
    <React.Fragment>
      {Object.keys(filteredData).length > 0 && (
        // <Card variant="outlined">
        <EnhancedTable
          headers={filteredData.keys}
          rows={filteredData.values}
          country={countryName}
        />
        // </Card>
      )}
    </React.Fragment>
  );
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort, headCells } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding={"default"}>#</TableCell>
        {headCells.map((headCell, index) => (
          <TableCell
            key={headCell.id}
            align={"center"}
            padding={"default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 12,
    marginRight: 29,
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
    margin: 10,
  },
  table: {
    minWidth: 750,
    height: 500,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  container: {
    height: 500,
  },
}));

function EnhancedTable({ rows, headers, country }) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <div className={classes.root}>
      <Paper variant="outlined" className={classes.paper}>
        <h3 className="card-title">
          {country} {" States"}
        </h3>
        <Divider />
        <TableContainer className={classes.container}>
          <Table
            stickyHeader
            className={classes.table}
            aria-labelledby="tableTitle"
            size={"medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              headCells={headers}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy)).map(
                (row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {/* <TableCell padding="checkbox"></TableCell> */}
                      <TableCell component="th" id={index} align="center">
                        {index + 1}
                      </TableCell>
                      <TableCell
                        style={{ color: headers[0].color }}
                        align="center"
                      >
                        {row.province}
                      </TableCell>
                      <TableCell
                        style={{ color: headers[1].color }}
                        align="center"
                      >
                        {numeral(row.confirmed).format("0,0")}
                      </TableCell>
                      <TableCell
                        style={{ color: headers[2].color }}
                        align="center"
                      >
                        {numeral(row.confirmed_diff).format("0,0")}
                      </TableCell>
                      <TableCell
                        style={{ color: headers[3].color }}
                        align="center"
                      >
                        {numeral(row.active).format("0,0")}
                      </TableCell>
                      <TableCell
                        style={{ color: headers[4].color }}
                        align="center"
                      >
                        {numeral(row.deaths).format("0,0")}
                      </TableCell>
                      <TableCell
                        style={{ color: headers[5].color }}
                        align="center"
                      >
                        {numeral(row.deaths_diff).format("0,0")}
                      </TableCell>
                      <TableCell
                        style={{ color: headers[6].color }}
                        align="center"
                      >
                        {numeral(row.Case_Fatality_Rate).format("0,0")}
                        {"%"}
                      </TableCell>
                      <TableCell
                        style={{ color: headers[7].color }}
                        align="center"
                      >
                        {numeral(row.recovered).format("0,0")}
                      </TableCell>
                      <TableCell
                        style={{ color: headers[8].color }}
                        align="center"
                      >
                        {numeral(row.Recovery_Proporation).format("0,0")}
                        {"%"}
                      </TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
export default CountryProvinceTable;
