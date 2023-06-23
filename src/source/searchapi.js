import axios from "axios";
import Homepage from "../pages/Homepage/Homepage";

export default async function SearchAnime() {
  let naziv;
  try {
    const response = await axios.get(
      `https://kitsu.io/api/edge/anime?filter[text]=${naziv}&page[limit]=20&page[offset]=0`
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
}
