import React from "react";
import "./AnimeCard.css";

export default function AnimeCard({ title, thumb, avgrating }) {
  return (
    <>
      <div className="anime-card">
        <img className="imganime" src={thumb} alt="" />
        <h2 style={{ color: "white" }}>{title}</h2>
        <p style={{ color: "white" }}>{Math.round(avgrating) / 10}</p>
      </div>
    </>
  );
}
