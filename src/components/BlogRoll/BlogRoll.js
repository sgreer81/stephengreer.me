import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styles from "./BlogRoll.module.scss"
import ArticlePreview from "../ArticlePreview/ArticlePreview"

const BlogRoll = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                fixed(height: 300, width: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            tags
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.nodes

  return (
    <section className={styles.blogRoll}>
      {posts.map(post => (
        <ArticlePreview
          key={post.id}
          image={post.frontmatter.featuredImage.childImageSharp}
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          path={post.frontmatter.path}
          tags={post.frontmatter.tags}
        />
      ))}
    </section>
  )
}

export default BlogRoll
