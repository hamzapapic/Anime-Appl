import React from "react";
import { GiBookAura } from "react-icons/gi";
import { GiLaptop } from "react-icons/gi";
import { GiHeartburn } from "react-icons/gi";
import { GiTwoShadows } from "react-icons/gi";

export const SidebarData = [
  {
    title: "Manga",
    path: "/",
    icon: <GiBookAura />,
    className: "side-text",
  },
  {
    title: "Anime",
    path: "/",
    icon: <GiLaptop />,
    className: "side-text",
  },
  {
    title: "Favorites",
    path: "/",
    icon: <GiHeartburn />,
    className: "side-text",
  },
  {
    title: "About us",
    path: "/",
    icon: <GiTwoShadows />,
    className: "side-text",
  },
];
