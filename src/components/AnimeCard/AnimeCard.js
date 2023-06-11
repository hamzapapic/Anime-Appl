import React from "react";
import "./AnimeCard.css";

export default function AnimeCard({ title, thumb, avgrating }) {
  return (
    <>
      <div className="card">
        <img src={thumb} />
        <h2 style={{ color: "white" }}>{title}</h2>
        <p style={{ color: "white" }}>{avgrating}</p>
      </div>
    </>
  );
}
