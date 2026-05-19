
import styles from './Footer.module.css';

const SocialMediaItem = ({socialMedia}) => {


    return(

<li className={styles.footerList}> 
                    <a href={socialMedia.url}>
                        <img src={socialMedia.icon} alt={socialMedia.title}  className={styles.socialMediaImg}/>
                         {socialMedia.title}
                    </a>
                </li>

        // <ul className={styles.footerLinks}>
        // {
        //     socialMedias.map(socialMedia => (
        //         <li key={socialMedia.id} className={styles.footerList}> 
        //             <a href={socialMedia.url}>
        //                 <img src={socialMedia.icon} alt={socialMedia.title}  className={styles.socialMediaImg}/>
        //                  {socialMedia.title}
        //             </a>
        //         </li>
        //     ))
        // }
        // </ul>
    )
}

export default SocialMediaItem;