import { useStaticQuery, graphql as gql } from "gatsby"

const useConfigQuery = () => {
  const data = useStaticQuery(gql`
            query ConfigQuery {
                markdownRemark(frontmatter: {type: {eq: "config"}}) {
                    frontmatter {
                        logo {
                            publicURL
                        }
                        menu {
                            id
                            link
                            name
                        }
                    }
                }
            }
  `)

  return data.markdownRemark.frontmatter
}

export default useConfigQuery