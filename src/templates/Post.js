import React from 'react';
import { graphql as gql } from 'gatsby';

import Layout from 'components/Layout';
import { ImagePost } from 'components/ImagePost';
import SEO from 'components/SEO';

const Post = ({ data }) => {
    const post = data.markdownRemark;

    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <ImagePost image={post.frontmatter.image.childImageSharp.gatsbyImageData} />
            <main>
                <h2>{post.frontmatter.title}</h2>
                <div dangerouslySetInnerHTML={{__html: post.html}}/>
            </main>
        </Layout>
    )
}

export default Post;

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