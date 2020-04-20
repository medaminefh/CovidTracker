import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import classes from "./Country.module.css";
import { countries } from "../../Api/index";

const Country = ({ handleCountry }) => {
  const [country, setCoutries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      setCoutries(await countries());
    };
    fetchCountries();
  }, [setCoutries]);
  return (
    <FormControl className={classes.formControl}>
      <NativeSelect default="" onChange={(e) => handleCountry(e.target.value)}>
        <option value="">Global</option>
        {country.map((c, i) => (
          <option key={i} value={c}>
            {c}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default Country;
