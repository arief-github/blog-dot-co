import * as React from "react"

import Seo from "components/SEO"
import Layout from "components/Layout"
import HomeBanner from "components/HomeBanner"
import BlogPostCard from "components/BlogPostCard"
import { graphql as gql } from "gatsby";

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <HomeBanner/>
      <main>
        {posts.map(( { node } , index) => {
          const title = node.frontmatter.title;
          const date = node.frontmatter.date;
          const readingTime = node.fields.readingTime.text;
          const excerpt = node.excerpt;
          const image = node.frontmatter.image.childImageSharp.gatsbyImageData;

          return <BlogPostCard 
                    key={index} 
                    slug="/" 
                    title={title} 
                    date={date} 
                    readingTime={readingTime} 
                    exceprt={excerpt} 
                    image={image} 
                    alt="blog post card"
                />
        })}
      </main>
    </Layout>
  )
}

export const query = gql`
query blogListQuery {
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {type: {eq: "post"}}}
    ) {
      edges {
        node {
          fields {
            readingTime {
              text
            }
          }
          frontmatter {
            date
            title
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 200, height: 200
                )
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;


/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
