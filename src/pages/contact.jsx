import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Contact extends React.Component {
  render () {
    const { data } = this.props
    const { title } = data.site.siteMetadata

    return (
      <Layout location={this.props.location} title={title}>
        <SEO title="Contact" />

        <h2 className="text-5xl mb-3 text-center">Contact</h2>
      </Layout>
    )
  }
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`