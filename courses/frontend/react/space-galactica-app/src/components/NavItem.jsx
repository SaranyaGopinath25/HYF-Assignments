import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames';


const NavItem = (props) => {
    const {navbarItem, currentPath } = props
    return(
                <li className={classNames(styles.navbarLinks, {
                            [styles.isLinkActive]: navbarItem.link === currentPath,
                          })}>
                            <Link to={navbarItem.link}><b>01</b> {navbarItem.title}</Link>
                          </li>
    )
}

export default NavItem;