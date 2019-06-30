import React from "react"
import PropTypes from "prop-types"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./Bio.module.scss"

const Bio = ({ horizontal }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "headshot.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section
      className={`${styles.bio} ` + (horizontal ? styles.horizontal : ``)}
    >
      <div className={styles.headshotWrapper}>
        <Img
          className={styles.headshot}
          fluid={data.placeholderImage.childImageSharp.fluid}
          alt="Stephen Greer's Headshot"
        />
      </div>

      <div className={styles.content}>
        {horizontal ? <h3>Stephen Greer</h3> : <h1>Stephen Greer</h1>}
        <p className={styles.subheading}>
          Stephen is a full stack web engineer.
        </p>
        <p className={styles.subheading}>
          He works as a lead engineer for{" "}
          <a
            href="https://fansided.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FanSided
          </a>
          , a media company running 300+ sport and entertainment websites.
        </p>

        <div className={styles.social}>
          <a
            href="https://twitter.com/s_greer81"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>

          <a
            href="https://www.linkedin.com/in/stephensgreer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/sgreer81"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  )
}

Bio.propTypes = {
  horizontal: PropTypes.bool,
}

export default Bio
