import styles from "./DestinationPage.module.css";

const PlanetCard = ({ planet, thumbnail,description, isSelected, togglePlanetSelection }) => {
  return (
    <>
        <div className={styles.planetCard}>
          <img
            className={styles.planetThumbnail}
            src={thumbnail}
            alt={planet}
          />
          <div className={styles.planetDescription}>
            <h2>
              {planet} {isSelected(planet) ? "- SELECTED" : ""}
            </h2>
            <p>{description}</p>
          </div>
          <button
            className="roundButton"
            onClick={() => togglePlanetSelection(planet, thumbnail)}
          >
            {isSelected(planet)
              ? "REMOVE FROM WISHLIST"
              : "ADD TO WISHLIST"}
          </button>
        </div>
    </>
  );
};

export default PlanetCard;
