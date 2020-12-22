import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const Footer = () => {
  const links = [
    { name: 'Github', url: '' },
    { name: 'Github', url: '' },
    { name: 'Github', url: '' },
  ]
  return (
    <footer className="flex justify-center">
      <div className="flex flex-col">
        <div>
          {links.map(({ name, url }) => (
            <a key={name} rel="noopener noreferrer nofollow" href={url}>{name}</a>
          )).reduce((prev, curr) => [prev, ' · ', curr])}
        </div>

        <div>
          © {new Date().getFullYear()} Daniel Muñoz
        </div>
      </div>
    </footer>
  )
}

export default Footer
