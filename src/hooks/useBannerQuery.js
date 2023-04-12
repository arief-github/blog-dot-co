import { graphql as gql, useStaticQuery } from 'gatsby'
import React from 'react'

const useBannerQuery = () => {
  const data = useStaticQuery(gql`
    query bannerQuery {
        markdownRemark(frontmatter: {type: {eq: "banner"}}) {
            frontmatter{
                bannerImage {
                    childImageSharp {
                        gatsbyImageData(
                            width: 2000
                          )
                    }
                }
                bannerImageText
                bannerImageBtnText
                bannerImageBtnLink
            }
        }
    }
  `)

  return data.markdownRemark.frontmatter
}

export default useBannerQuery