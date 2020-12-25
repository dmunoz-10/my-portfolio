import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author {
            name
            socialMedia {
              name
              url
            }
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  const { name: authorName, socialMedia } = author

  return (
    <footer className="flex justify-center mt-20">
      <div className="flex flex-col">
        <div className="flex justify-around text-xl">
          {socialMedia.map(({ name, url }) => (
            <a
              key={name}
              rel="noopener noreferrer"
              href={url}
              target="_blank"
            >{name}</a>
          )).reduce((prev, curr) => [prev, <Fragment key={1}>&nbsp;&nbsp; · &nbsp;&nbsp;</Fragment>, curr])}
        </div>

        <div className="flex justify-center mt-1 text-lg">
          { authorName } © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}

export default Footer
