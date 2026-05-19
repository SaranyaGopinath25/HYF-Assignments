import PlanetCard from "./PlanetCard";
import { AddWishlistItem } from "./AddWishlistItem";
import PlanetsWishlistItem from "./PlanetsWishlistItem";
import styles from "./DestinationPage.module.css";
import { useWishlist } from "../../contexts/WishlistContext.jsx";



export const Destinations = () => {
  const planets = [
    {
      id: 1,
      name: "Europa",
      description:
        "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
      thumbnail: "/destination/image-europa.png",
    },
    {
      id: 2,
      name: "Mars",
      description:
        "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
      thumbnail: "/destination/image-mars.png",
    },
    {
      id: 3,
      name: "Moon",
      description:
        "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
      thumbnail: "/destination/image-moon.png",
    },
    {
      id: 4,
      name: "Titan",
      description:
        "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
      thumbnail: "/destination/image-titan.png",
    },
  ];


  const { planetsWishlist, addPlanetToWishlist, removePlanetFromWishlist, isPlanetInWishlist } = useWishlist();


  const togglePlanetSelection = (name, thumbnail) => {
    
    const inWhishList = isPlanetInWishlist(name);
    inWhishList
      ? removePlanetFromWishlist(name)
      : addPlanetToWishlist(name, thumbnail);
  };

  

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>

          {/* 🧑🏽‍🚀 Task - Week 2 */}
          {/* Display the number of wishlist planets, if there are any planets in the wishlist. */}
          {/* Display the "no planets" message if the wishlist is empty. */}
          {/* 🧑🏽‍🚀 Use a variable to display the number of wishlist planets:  */}
          <p>
            {planetsWishlist.length > 0
              ? `You have ${planetsWishlist.length} planets in your wishlist`
              : `No planets in your wishlist`}
          </p>

          <AddWishlistItem onAddWishlistItem={addPlanetToWishlist} />

          {/* 🧑🏽‍🚀 Task - Week 3*/}
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            {planetsWishlist.map((planet) => (
              <PlanetsWishlistItem
                key={planet.name}
                name={planet.name}
                thumbnail={planet.thumbnail}
                onRemove={removePlanetFromWishlist}
              />
            ))}
          </div>
        </section>
        <section className="card">
          <h2>Possible destinations</h2>

            {
              planets.map((planet) => (
                <PlanetCard
                  key={planet.name}
                  planet={planet.name}
                  thumbnail={planet.thumbnail}
                  description={planet.description}
                  isSelected={isPlanetInWishlist}
                  togglePlanetSelection={togglePlanetSelection}
                />
                
              ))
            }
        </section>
      </main>
    </div>
  );
};

export default Destinations;

// 🧑🏽‍🚀 Task - Week 4 - part 2
// Hate to break it to you, but you will have to make some changes to the code you already wrote.
// Now that you have context, grab and use the context data in this.
// You will need to replace some of the variables and functions with the ones from the context.
