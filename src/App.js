import React, { Component } from "react";
import classes from "./App.module.css";
import { Chart, Cards, Country } from "./components";
import { fetchData } from "./Api/index";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    //fetch data
    const fetchedData = await fetchData(country);
    //set state
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={classes.container}>
        <Cards data={data} />
        <Country handleCountry={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
