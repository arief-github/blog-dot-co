import * as React from "react"

import Seo from "components/SEO"
import Layout from "components/Layout"
import HomeBanner from "components/HomeBanner"
import BlogPostCard from "components/BlogPostCard"
import PageNavigation from "components/PageNavigation"
import { graphql as gql } from "gatsby";

const IndexPage = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <HomeBanner/>
      <main>
        <PageNavigation currentPage={pageContext.currentPage} numPages={pageContext.numPages} />
        {posts.map(( { node } , index) => {
          const title = node.frontmatter.title || node.fields.slug;
          const date = node.frontmatter.date;
          const readingTime = node.fields.readingTime.text;
          const excerpt = node.excerpt;
          const image = node.frontmatter.image.childImageSharp.gatsbyImageData;

          return <BlogPostCard 
                    key={node.fields.slug} 
                    slug={node.fields.slug} 
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
query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {type: {eq: "post"}, published: { eq: true } } }
    ) {
      edges {
        node {
          fields {
            slug
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
