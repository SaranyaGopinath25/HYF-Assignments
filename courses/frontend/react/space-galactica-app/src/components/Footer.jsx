import { useLocation } from "react-router-dom";
import styles from './Footer.module.css';
import { Link } from "react-router-dom"; 
import SocialMediaItem from "./SocialMediaItem";
import NavItem from "./NavItem";

export const Footer = () => {
  const { pathname } = useLocation();

  const socialMedias = [
    {
      id : 1,
      url: "https://facebook.com",
      title : "Facebook",
      icon : "/socialmedia/facebook.png"

    },
    {
      id : 2,
      url: "https://linkedin.com",
      title : "LinkedIn",
      icon : "/socialmedia/linkedin.png"
    },
    {
      id : 3,
      url: "https://instagram.com",
      title : "Instagram",
      icon : "/socialmedia/instagram.png"
    },
    {
      id : 4,
      url: "https://tiktok.com",
      title : "Tiktok",
      icon : "/socialmedia/tiktok.png"
    },
    {
      id : 5,
      url: "https://google.com",
      title : "On the streets at night",
      icon : "/socialmedia/google.png"
    }

  ]
  const navbarItems = [
  {
    title: 'ABOUT US',
    link: '/about_us',
  },
  {
    title: 'DESTINATION',
    link: '/destination',
  },
  {
    title: 'NASA COLLABORATION',
    link: '/nasa_collaboration',
  }
];

  return (
    <footer className={pathname !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>Explore the universe and beyond. Your journey to the stars starts here.</p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      {/* 🧑🏽‍🚀 Task - Week 2 */}
      {/* Create a new list for the Pages. */}
      {/* We need to use the <Link /> component here. */}
      <div className={styles.footerLinks}>
        <h3>Pages</h3>
        <ul className={styles.footerList}>
          {
            navbarItems.map(navbarItem => (
              <NavItem key={navbarItem.link} navbarItem={navbarItem} />

            ))

          }
{/*           
          <li> <Link to="/about_us" >About Us </Link></li>
          <li><Link to="/destination">Destination</Link></li>
          <li><Link to="/nasa_collaboration">Nasa Collaboration</Link></li> */}
        </ul>
      </div>

      {/* Docs for the Link: https://reactrouter.com/api/components/Link#link. */}

      {/* 🧑🏽‍🚀 Task - Week 1 */}
      {/* Add a new list item for LINKEDIN */}
      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          {socialMedias.map(socialMedia => (

            <SocialMediaItem key={socialMedia.id} socialMedia = {socialMedia} />

          ))}

        </ul>
          {/* 🧑🏽‍🚀 Task - Week 2 */}
          {/* Create a <SocialMediaItem /> component and replace all of the list items! */}
          {/* SocialMediaItem should accept the following props: url, title, icon. */}
          {/* For the icons, you can download 1-2 social media icons for testing and put it in the /public/socialmedia/ folder. */}
      </div>
    </footer>
  );
}
