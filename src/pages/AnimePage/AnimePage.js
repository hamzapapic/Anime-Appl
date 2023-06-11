import React, { useEffect, useState } from "react";
import "./AnimePage.css";
import GetAnime from "../../source/api";
import AnimeCard from "../../components/AnimeCard/AnimeCard";

export default function AnimePage() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    GetAnime().then((data) => {
      setData(data);
    });
  }, []);
  return (
    <>
      <div className="animes">
        {data.map((anime) => {
          const language = Object.keys(anime.attributes.titles)[0];
          return (
            <AnimeCard
              title={anime.attributes.titles[language]}
              thumb={anime.attributes.posterImage.medium}
              avgrating={anime.attributes.averageRating}
            />
            //
          );
        })}
      </div>
    </>
  );
}
