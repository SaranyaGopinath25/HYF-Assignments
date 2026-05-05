import styles from "./DestinationPage.module.css";

const PlanetsWishlistItem = ({ name, thumbnail, onRemove }) => {

const onRemoveItem = () => {
  onRemove(name);
}

  return (
    <div className={styles.wishlistItem}>
      <img className={styles.wishlistItemThumbnail} src={thumbnail} alt="" />
      <b>{name.toUpperCase()}</b>
      <button onClick={onRemoveItem}>remove</button>
    </div>
  );
}

export default PlanetsWishlistItem;