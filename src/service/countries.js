import Axios from "axios";

const url = "https://restcountries.com/v2/all";

export const countries = async() => {
  const response = await Axios.get(url);
  const countries = response.data;
  return countries;
}