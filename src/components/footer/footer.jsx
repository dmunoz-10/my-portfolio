import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          socialMedia {
            name
            url
          }
        }
      }
    }
  `)

  const { socialMedia } = data.site.siteMetadata

  return (
    <footer className="flex justify-center">
      <div className="flex flex-col">
        <div className="flex justify-around">
          {socialMedia.map(({ name, url }) => (
            <a key={name} rel="noopener noreferrer nofollow" href={url}>{name}</a>
          )).reduce((prev, curr) => [prev, ' · ', curr])}
        </div>

        <div className="flex justify-center mt-1">
          © {new Date().getFullYear()} Daniel Muñoz
        </div>
      </div>
    </footer>
  )
}

export default Footer
