// import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/Seo"

import React from "react"
import PropTypes from "prop-types"

import styles from "./styles/index.module.scss"
import Layout from "../components/Layout/Layout"
import BlogRoll from "../components/BlogRoll/BlogRoll"
import Bio from "../components/Bio/Bio"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className={styles.container}>
        <div className={styles.index}>
          <div className={styles.intro}>
            <Bio />
          </div>
          <div className={styles.blogRoll}>
            <BlogRoll />
          </div>
        </div>
      </div>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object,
}

export default IndexPage
