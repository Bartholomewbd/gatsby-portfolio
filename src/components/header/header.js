import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link to="/" className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink}>About</Link>
                    </li>
                    <li>
                        <Link to="/projects" className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink}>Projects</Link>
                    </li>
                    <li>
                        <Link to="/blog" className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header