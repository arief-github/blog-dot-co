import React from 'react';
import { graphql as gql } from 'gatsby';

import Layout from 'components/Layout';
import { ImagePost } from 'components/ImagePost';
import SEO from 'components/SEO';

const Page = ({ data }) => {
    const page = data.markdownRemark;

    return (
        <Layout>
            <SEO title={page.frontmatter.title} />
            <ImagePost image={page.frontmatter.image.childImageSharp.gatsbyImageData} />
            <main>
                <h2>{page.frontmatter.title}</h2>
                <div dangerouslySetInnerHTML={{__html: page.html}}/>
            </main>
        </Layout>
    )
}

export default Page;

export const query = gql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
                image {
                    childImageSharp {
                        gatsbyImageData(
                            width: 2000
                        )
                    }
                }
            }
        }
    }
`