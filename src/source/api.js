import axios from "axios";

export default async function GetAnime() {
  try {
    const response = await axios.get(
      `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0`
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
}
