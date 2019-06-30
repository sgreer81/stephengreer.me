import React, { useRef, useState, useEffect } from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Bio from "../../components/Bio/Bio"
import Layout from "../../components/Layout/Layout"
import Seo from "../../components/Seo"
import styles from "./ArticleTemplate.module.scss"

const ArticleTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html, excerpt } = markdownRemark

  const article = useRef(null)
  const [percentScrolled, setPercentScrolled] = useState(0)

  /**
   * Animate post progress bar
   */
  const progressBar = () => {
    const elPosition = element => {
      let yPosition = 0

      while (element) {
        yPosition += element.offsetTop - element.scrollTop + element.clientTop
        element = element.offsetParent
      }

      return yPosition
    }

    const postOffset = elPosition(article.current)
    const postHeight = article.current.offsetHeight
    const windowHeight = window.innerHeight
    const scrollOffset = window.document.documentElement.scrollTop

    const totalPostHeight = postHeight + postOffset
    const scrollPosition = scrollOffset + windowHeight

    let percentScrolled = parseFloat(
      (scrollPosition / totalPostHeight) * 100
    ).toFixed(2)
    percentScrolled = percentScrolled > 100 ? 100 : percentScrolled

    setPercentScrolled(percentScrolled)
  }

  useEffect(() => {
    progressBar()
    window.addEventListener("scroll", progressBar)

    return () => window.removeEventListener("scroll", progressBar)
  }, [])

  return (
    <Layout>
      <Seo
        title={frontmatter.title}
        description={excerpt}
        image={frontmatter.featuredImage.publicURL}
      />
      <div ref={article}>
        <div className={styles.progressBarWrapper}>
          <div
            style={{ width: `${percentScrolled}%` }}
            className={styles.progressBar}
          />
        </div>

        <div className={styles.bgWrapper}>
          <BackgroundImage
            className={styles.titleBg}
            fluid={frontmatter.featuredImage.childImageSharp.fluid}
          />
        </div>

        <div className={styles.titleCard}>
          <h1 className={styles.title}>{frontmatter.title}</h1>
          <time date={frontmatter.date}>{frontmatter.date}</time>
        </div>
        <div className={styles.post}>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <Bio horizontal={true} />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        featuredImage {
          publicURL
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default ArticleTemplate
