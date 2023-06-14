import React from "react";
import "./Homepage.css";
import AnimeCard from "../../components/AnimeCard/AnimeCard";

export default function Homepage() {
  async function search() {
    let data;
    let res;
    var naziv = document.getElementById("search");
    if (naziv.length !== 0) {
      let results = await fetch(
        `https://kitsu.io/api/edge/anime?filter[text]=${naziv}&page[limit]=20&page[offset]=0`
      )
        .then((res) => res.json())
        .then((data) => console.log(data.data));

      // Moram da provalim kako da napravim ovo

      //   console.log(lista);
      //   document.innerHTML(
      //     <div className="animes">
      //       {data.map((anime) => {
      //         const language = Object.keys(anime.attributes.titles)[0];
      //         return (
      //           <AnimeCard
      //             title={anime.attributes.titles[language]}
      //             thumb={anime.attributes.posterImage.small}
      //             avgrating={anime.attributes.averageRating}
      //           />
      //           //
      //         );
      //       })}
      //     </div>
      //   );
    }
  }
  return (
    <div className="HomePage">
      <div className="home p30">
        <div className="flexy">
          <img
            src="https://spikesite2-17132.kxcdn.com/wp-content/uploads/Logo_symbol_512x512_Trans.png?format=webp"
            className="logo"
          />
          <h3 className="logoname">JOJO TV</h3>
        </div>
        <div className="searchcontainer">
          <input
            type="text"
            placeholder="Search anime..."
            className="homesearch"
            id="search"
          />
          <button
            id="search"
            onClick={() => {
              search();
            }}
            className="searchbtn"
          ></button>
        </div>
      </div>
    </div>
  );
}
