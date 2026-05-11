import { useLocation } from "react-router-dom";
import { Planet } from '../icons/Planet';
import { Badge } from './Badge';
import styles from './Navbar.module.css';
import NavItem from "./NavItem.jsx"
import { useWishlist } from "../contexts/WishlistContext.jsx";

const navbarItems = [
  {
    id: 1,
    title: 'ABOUT US',
    link: '/about_us',
  },
  {
    id: 2,
    title: 'DESTINATION',
    link: '/destination',
  },
  {
    id: 3,
    title: 'NASA COLLABORATION',
    link: '/nasa_collaboration',
  }
];

export const Navbar = () => {
  const currentPath = useLocation().pathname;
  const { wishlistCount } = useWishlist();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/"><img src="/shared/logo.svg" alt="" /> GALACTICA</a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          
          {navbarItems.map(navItem => (
            <NavItem key={navItem.id}  navbarItem = {navItem} currentPath={currentPath} />

          ))}

          <li className={styles.wishlistBadge} aria-label="Wishlist">
          </li>
        </ul>
        {/* 🧑🏽‍🚀 Task - Week 4 - part 3 */}
        {/* Take the count of the planets wishlist from the context and display it in the Badge. */}
        <Badge count={wishlistCount()}>
          <Planet color="white"  />
        </Badge>
      </nav>
    </header>
  );
}