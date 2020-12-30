import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/panda-profile.jpg/" }) {
        childImageSharp {
          fixed(width: 80, height: 80, cropFocus: CENTER) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            description
          }
        }
      }
    }
  `)

  const {
    author: { name, description },
  } = data.site.siteMetadata

  return (
    <div className="flex mb-20">
      <Image
        className="mr-4 mb-0 rounded-full"
        fixed={data.avatar.childImageSharp.fixed}
        alt={name}
        style={{
          minWidth: 80,
        }}
      />
      <div className="my-auto">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-base">{description}</p>
      </div>
    </div>
  )
}

export default Bio
