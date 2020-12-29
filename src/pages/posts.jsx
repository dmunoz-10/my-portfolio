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
        <SEO title="Posts" />

        <h2 className="text-5xl">Posts</h2>

        {posts.length === 0 ?
          <div className="mt-10 block w-full text-center">
            <h4 className="text-xl text-gray-500">There isn't posts yet :(</h4>
          </div>:
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
            {posts.map(({ node: { id, excerpt, fields: { slug }, frontmatter } }) => {
              const { cover, title: postTitle, description, tags, date } = frontmatter
              return (
                <div className="rounded-md overflow-hidden shadow-lg bg-white" key={id}>
                  <Link to={slug}>
                    <img className="w-full mb-2" src={cover.childImageSharp.fluid.src} alt={postTitle} />
                    <div className="px-6 py-4">
                      <h5 className="text-sm text-gray-600 mb-4" >{ date }</h5>
                      <h3 className="font-bold text-xl mb-2">{ postTitle }</h3>
                      <p className="text-gray-700 text-base">
                        { description || excerpt }
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        }
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
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            cover {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            description
            tags
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`