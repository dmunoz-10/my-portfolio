import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Posts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filterPosts: [],
    }
  }

  editFilter(tag) {
    this.setState(state => {
      let filterPosts = state.filterPosts

      if (filterPosts.includes(tag)) {
        filterPosts = filterPosts.filter(t => t !== tag)
      } else {
        filterPosts.push(tag)
      }

      return { filterPosts }
    })
  }

  render () {
    const { data } = this.props
    const { filterPosts } = this.state
    const { title } = data.site.siteMetadata
    const posts = data.allMarkdownRemark.edges
    let postsFiltered

    if (filterPosts.length === 0) {
      postsFiltered = posts
    } else {
      postsFiltered = posts.filter(({ node: { frontmatter: { tags }}}) => {
        return filterPosts.every(tag => tags.includes(tag))
      })
    }

    return (
      <Layout location={this.props.location} title={title}>
        <SEO title="Posts" />

        <h2 className="text-5xl text-center">Posts</h2>

        {
          filterPosts.length > 0 &&
          <div className="w-full flex justify-between mb-5 mt-10">
            <div className="py-auto">
              {filterPosts.map((tag) => (
                <span
                  key={tag}
                  onClick={() => this.editFilter(tag)}
                  className="
                    inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold cursor-pointer
                    text-gray-700 mr-2 my-2
                  "
                >
                  #{tag} &times;
                </span>
              ))}
            </div>
            <button
              className="
                px-4 py-2 text-lg font-semibold text-white transition-colors duration-300
                rounded-md shadow bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-gray-200
                focus:ring-4
              "
              onClick={() => this.setState({ filterPosts: [] })}
            >
              Clear
            </button>
          </div>
        }

        {posts.length === 0 ?
          <div className="mt-10 block w-full text-center">
            <h4 className="text-xs md:text-base text-gray-500">There isn't posts yet :(</h4>
          </div>:
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
            {postsFiltered.map(({ node: { id, excerpt, fields: { slug }, frontmatter } }) => {
              const { cover, title: postTitle, description, tags, date } = frontmatter
              return (
                <div className="relative pb-16 rounded-md overflow-hidden shadow-md hover:shadow-2xl bg-white" key={id}>
                  <Link to={slug}>
                    <img className="w-full mb-2" src={cover.childImageSharp.fluid.src} alt={postTitle} />
                  </Link>
                    <div className="px-6 py-4">
                      <h5 className="text-sm text-gray-600 mb-4" >{ date }</h5>
                      <Link to={slug}>
                        <h3 className="font-bold text-xl mb-2">{ postTitle }</h3>
                      </Link>
                      <p className="text-gray-700 text-base">
                        { description || excerpt }
                      </p>
                    </div>
                    <div className="absolute px-6 pt-4 pb-2 bottom-0">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          onClick={() => this.editFilter(tag)}
                          className="
                            inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold cursor-pointer
                            text-gray-700 mr-2 mb-2
                          "
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
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
