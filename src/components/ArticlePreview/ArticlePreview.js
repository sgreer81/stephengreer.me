import React, { useState } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Link from "gatsby-link"
// import moment from "moment"

import styles from "./ArticlePreview.module.scss"

const ArticlePreview = ({ title, image, path, date }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className={styles.postPreview + (hovered ? ` ${styles.hovered}` : "")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.image}>
        <Img fixed={image.fixed} />
      </div>

      <div className={styles.content}>
        <h2
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <time dateTime={date} className={styles.date}>
          {date}
        </time>
      </div>
      <Link to={path}>
        <span className={styles.linkSpanner} />
      </Link>
    </article>
  )
}

ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default ArticlePreview
