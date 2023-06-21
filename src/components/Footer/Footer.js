import React from "react";
import "./Footer.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiDiscordFill } from "react-icons/ri";
import { AiFillRedditCircle } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="text">
        <div className="icons">
          <img
            style={{
              height: "7vh",
              borderRight: "3px solid gray",
              paddingRight: "0.5rem",
              paddingLeft: "0.5rem",
            }}
            src="https://spikesite2-17132.kxcdn.com/wp-content/uploads/Logo_symbol_512x512_Trans.png?format=webp"
          />
          <a href="https://twitter.com/?lang=sr">
            <AiFillTwitterCircle
              style={{
                fontSize: "2.3rem",
                backgroundColor: "blue",
                color: "white",
                borderRadius: "50%",
                padding: "0.1rem",
                marginLeft: "1rem",
              }}
            />
          </a>
          <a href="https://discord.com/invite/otaku">
            <RiDiscordFill
              style={{
                fontSize: "2.3rem",
                backgroundColor: "#5865F2",
                color: "white",
                borderRadius: "50%",
                padding: "0.3rem",
                marginLeft: "0.5rem",
              }}
            />
          </a>
          <a href="https://www.reddit.com/">
            <AiFillRedditCircle
              style={{
                fontSize: "2.3rem",
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                padding: "0.3rem",
                marginLeft: "0.5rem",
              }}
            />
          </a>
          <a href="https://github.com/hamzapapic/Anime-Appl">
            <FaGithubSquare
              style={{
                fontSize: "2.3rem",
                backgroundColor: "white",
                color: "black",
                borderRadius: "50%",
                padding: "0.3rem",
                marginLeft: "0.5rem",
              }}
            />
          </a>
        </div>
        <div className="footer-info">
          <p>©Jojo.TV. All rights reserved.</p>
          <p>
            ©Jojo.TV does not store any files on our server,we only linked to
            the media which is hosted on 3rd party.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
