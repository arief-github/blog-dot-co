import { useStaticQuery, graphql as gql } from 'gatsby'

const useMetaDataQuery = () => {
  const data = useStaticQuery(gql`
      query MetaDataQuery {
        site {
            siteMetadata {
                author
                description
                title
            }
        }
      }
  `)

  return data.site.siteMetadata;
}

export default useMetaDataQuery