import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, deaths, lastUpdate, recovered },
    } = await axios.get(changeableUrl);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (err) {
    console.log(err);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modified = data.map((i) => ({
      confirmed: i.confirmed.total,
      deaths: i.deaths.total,
      date: i.reportDate,
    }));
    return modified;
  } catch (err) {
    console.log(err);
  }
};

export const countries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((i) => i.name);
  } catch (err) {
    console.log(err);
  }
};
