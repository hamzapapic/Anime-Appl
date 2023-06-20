import React from "react";
import "./Homepage.css";
import SearchIcon from "@mui/icons-material/Search";
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
      console.log(results);

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
          >
            <SearchIcon></SearchIcon>
          </button>
        </div>
      </div>
      <div className="desc">
        <p>
          <h1>JOJO TV - Your Ultimate Destination for Free Anime Streaming</h1>
          Are you an avid anime fan searching for the perfect online platform to
          indulge in your favorite shows? Look no further than JOJO TV! With an
          increasing global interest in anime, we understand the importance of
          offering a top-notch streaming experience for anime enthusiasts
          worldwide.
        </p>
        <p>
          <h3>1/ What is JOJO TV?</h3> JOJO TV is an exceptional free anime
          streaming site that allows you to watch your favorite anime series and
          movies without any registration or payment requirements. We take pride
          in providing a platform tht offers a seamless and enjoyable
          anime-watching experience.
        </p>
        <p>
          <h3>2/ Is JOJO TV Safe?</h3> Absolutely! At JOJO TV, we prioritize
          your safety and enjoyment. We have implemented strict measures to
          ensure a secure environment for our users. Our vigilant team
          continuously monitors the platform, and any suspicious ads or content
          are promptly removed to maintain a safe browsing experience.
        </p>
        <p>
          <h3>3/ Why Choose JOJO TV as Your Go-To Anime Streaming Site?</h3> We
          have meticulously studied and learned from other anime streaming sites
          to create JOJO TV as the ultimate destination for all your anime
          cravings. Here's why we believe JOJO TV stands out from the rest:
        </p>
        <p>
          Dedicated Content Library: JOJO TV boasts an extensive and diverse
          content library, featuring popular, classic, and current titles from
          various genres such as action, drama, fantasy, romance, comedy, and
          more. Whether you prefer subbed or dubbed anime, we have you covered.
        </p>
        <p>
          Unmatched Quality: We strive to deliver the best possible streaming
          experience. All our titles are available in excellent resolution,
          ensuring you can enjoy your favorite anime in stunning quality. With
          our quality setting function, you can adapt the streaming resolution
          to suit your internet speed, ranging from 360p to 1080p.
        </p>
        <p>
          Seamless Streaming: JOJO TV offers a smooth streaming experience with
          fast loading speeds, allowing you to dive into your favorite anime
          without any interruptions. Additionally, downloading anime episodes
          for offline viewing is hassle-free, ensuring you never miss a moment
          of excitement.
        </p>
        <p>
          Regular Updates: We understand the importance of staying up to date
          with the latest anime releases. At JOJO TV, we update our library
          daily with new titles, ensuring you always have fresh content to
          explore. We also take user requests seriously and make every effort to
          fulfill them promptly.{" "}
        </p>
        <p>
          User-Friendly Interface: Our intuitive user interface and user
          experience design make navigating JOJO TV a breeze. Whether you are a
          seasoned anime enthusiast or a newcomer, you'll find our site easy to
          navigate. Use the search function to find specific titles or browse
          through categories and new releases for exciting recommendations.{" "}
        </p>
        <p>
          {" "}
          24/7 Customer Support: Our dedicated support team is available round
          the clock to assist you. Whether you need help, have inquiries, or
          want to provide feedback, we're here to ensure your experience on JOJO
          TV is exceptional.
        </p>
        <h5>
          If you're seeking a trustworthy and captivating platform for your
          anime streaming needs, look no further than JOJO TV. Join us today and
          explore a world of captivating anime adventures. Don't forget to
          bookmark our site and share the word with fellow anime enthusiasts.
          Welcome to JOJO TV, where anime dreams come to life!
        </h5>
      </div>
    </div>
  );
}
