import React from "react"

import styles from "./Footer.module.scss"

const Footer = () => (
  <div className={styles.container}>
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.contact}>
          <h3>Contact</h3>
          <p>info[at]stephengreer.me</p>
        </div>
      </div>

      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Stephen Greer. All Rights Reserved.
      </div>
    </footer>
  </div>
)

export default Footer
