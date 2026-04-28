import styles from "./DestinationPage.module.css";

const PlanetCard = ({ planets, isSelected, togglePlanetSelection }) => {
  return (
    <>
      {planets.map((planet) => (
        <div key={planet.id} className={styles.planetCard}>
          <img
            className={styles.planetThumbnail}
            src={planet.thumbnail}
            alt={planet.name}
          />
          <div className={styles.planetDescription}>
            <h2>
              {planet.name} {isSelected(planet.name) ? "- SELECTED" : ""}
            </h2>
            <p>{planet.description}</p>
          </div>
          <button
            className="roundButton"
            onClick={() => togglePlanetSelection(planet.name)}
          >
            {isSelected(planet.name)
              ? "REMOVE FROM WISHLIST"
              : "ADD TO WISHLIST"}
          </button>
        </div>
      ))}
    </>
  );
};

export default PlanetCard;
