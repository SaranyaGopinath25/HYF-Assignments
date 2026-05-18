import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames';


const NavItem = ({navItems, currentPath}) => {
    return(
        <>
        
        {
            navItems.map(navItem => (
                
                <li key={navItem.link} 
                    className={currentPath ? classNames(styles.navbarLinks, {
                            [styles.isLinkActive]: navItem.link === currentPath,
                          })
                          : ""
                        }>
                            <Link to={navItem.link}> {navItem.title}</Link>
                          </li>
            ))
        }
        
        </>
    )
}

export default NavItem;