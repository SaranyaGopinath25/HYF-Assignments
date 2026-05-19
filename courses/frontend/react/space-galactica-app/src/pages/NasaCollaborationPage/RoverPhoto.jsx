import styles from "./NasaCollaborationPage.module.css"

const RoverPhoto = ({imgUrl, date, roverName}) => {
    return(
        <>
        <p>Date {date}</p>
        <img className={styles.nasaPicOfTheDayImg} src={imgUrl} alt={roverName} />
        </>
    )
}
export default RoverPhoto;