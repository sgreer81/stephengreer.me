import React from 'react'
import Link from 'gatsby-link'

import styles from './Header.module.scss'

const Header = () => (
    <header>
        <div className={styles.header}>
            <div className={styles.siteName}>
                <Link to="/">Stephen Greer</Link>
            </div>
        </div>

        <div className={styles.headerSpacing}>

        </div>
    </header>
)

export default Header
