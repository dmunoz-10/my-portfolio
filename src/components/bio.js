import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
// import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/panda-profile.jpg/" }) {
        childImageSharp {
          fixed(width: 200, height: 200, cropFocus: CENTER) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata

  return (
    <div className="flex mb-20">
      <Image
        className="mr-4 mb-0 rounded-full"
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
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
  )
}

export default Bio
