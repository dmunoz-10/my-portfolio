/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

// import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/panda-profile.jpg/" }) {
        childImageSharp {
          fixed(width: 150, height: 150, cropFocus: CENTER) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className="flex mb-20">
      <Image
        className="mr-4 mb-0 rounded-full"
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          minWidth: 150,
        }}
      />
      <p>
        Written by <strong>{author}</strong> who lives and works in San
        Francisco building useful things.
        {` `}
        <a
          href={`https://twitter.com/${social.twitter}`}
        >
          You should follow him on Twitter
        </a>
      </p>
    </div>
  )
}

export default Bio
