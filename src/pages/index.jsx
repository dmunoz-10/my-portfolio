import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const author = data.site.siteMetadata.author

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} />

        <div className="flex mb-20">
          <Image
            className="mr-4 mb-0 rounded-full"
            fixed={data.avatar.childImageSharp.fixed}
            alt={author.name}
            style={{
              minWidth: 200,
            }}
          />

          <div className="my-auto">
            <h2 className="text-5xl">Hey! I'm <strong>Daniel</strong></h2>
            <p className="text-3xl">
              I'm a web developer focus mostly on <strong>back-end</strong>
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/panda-profile.jpg/" }) {
      childImageSharp {
        fixed(width: 200, height: 200, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
  }
`
