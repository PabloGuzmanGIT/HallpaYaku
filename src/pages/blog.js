import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'

const BlogPage = ({data}) => {
    
  return (
    <Layout pageTitle="My Blog Posts">
        {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
        }
      {/* <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul> */}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          
        }
        id
        excerpt
      }
    }
  }
`


export const Head = () => <Seo title="My Blog Posts" />
// export const Head = ({ data }) => <title>{data.site.siteMetadata.title}</title>
export default BlogPage
