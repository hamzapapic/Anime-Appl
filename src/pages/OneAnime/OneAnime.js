import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import GetAnime from "../../source/api";


export default function OneAnime({addToFav}) {
    const { id } = useParams();
    console.log(typeof id);
    console.log(GetAnime);
    const selected = GetAnime.find((e) => {
        return e.id == id;
    });
    console.log(selected);

    return (
    <div className="one-anime">
        <img className="backround">{selected.thumb}</img>
        <div className="crd.anime">
            <AnimeCard
            // title={selected.attributes.titles}
            thumb={selected.attributes.posterImage.small}
            // avgrating={selected.attributes.averageRating}
            />
        </div>
        <div className="info">
            <h1 style={{ color: "white" }}>{selected.title}</h1>
            <p className="infoP">{selected.attributes.description}</p>
            <div style={{width:"auto", backgroundColor:"#36d425",display:"inline-block"}}>{selected.episodeCount}ep</div>
            <div style={{padding:"5px", backgroundColor:"#256ed4",display:"inline-block"}}>{selected.showType}</div>
            <div style={{width:"auto",backgroundColor:"#d1d425",display:"inline-block"}}>{selected.ageRating}</div>

            <button className="fav-btn" onClick={addToFav}>add to favorites</button>
        </div>
    </div>
    );
}