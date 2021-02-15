import {
  FormControl,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
} from "@material-ui/core";
import React from "react";
import Searchbar from "./Searchbar";

function CountryList({ country, onCountryChange, countries }) {
  const [filterText, setFilterText] = React.useState("");
  const [filteredCountries, setFilteredCountries] = React.useState([
    ...countries,
  ]);
  React.useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);
  React.useEffect(() => {
    const setCountries = () => {
      if (filterText === "") {
        setFilteredCountries(countries);
        return;
      }
      setFilteredCountries(
        countries.filter(
          (item) =>
            item.value !== null &&
            item.name.toUpperCase().startsWith(filterText.toUpperCase())
        )
      );
    };
    setCountries();
  }, [filterText]);
  const focusRemoved = () => {
    setFilterText("");
  };
  return (
    <FormControl className="app__dropdown">
      <Select
        className="menu"
        variant="outlined"
        defaultValue="worldwide"
        value={country}
        onChange={onCountryChange}
        onClose={focusRemoved}
      >
        <Searchbar filterText={filterText} setFilterText={setFilterText} />
        <ListItem className="menu-item" key="worldwide" value="worldwide">
          <ListItemText>Worldwide</ListItemText>
        </ListItem>
        {filteredCountries.map((country) => (
          <ListItem
            className="menu-item"
            key={country.name}
            value={country.value}
          >
            <ListItemText>{country.name}</ListItemText>
          </ListItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CountryList;
