import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Posts extends React.Component {
  render () {
    const { data } = this.props
    const { title } = data.site.siteMetadata
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={title}>
        <SEO title="All posts" />

        <h2 className="text-5xl">Posts</h2>

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3 className="text-2xl font-black mt-16 mb-2">
                  <Link
                    className="text-blue-600 shadow-none"
                    to={node.fields.slug}
                  >
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  className="mb-8"
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default Posts

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`