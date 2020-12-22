import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import './styles.scss'
import Image from 'gatsby-image'

const Header = ({ rootPath }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      avatar: file(absolutePath: { regex: "/panda-profile.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, cropFocus: CENTER) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const links = [
    { name: 'Posts', path: '/posts' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header>
      <div className="container mx-auto pb-12">
        <nav className="flex items-center justify-between">
          <div className="flex justify-start">
            <Image
              className="mr-4 mb-0 rounded-full border-solid border-2 border-gray-300"
              fixed={data.avatar.childImageSharp.fixed}
              alt="Some"
              style={{ minWidth: 50 }}
            />
            {!rootPath && <Link className="text-2xl mt-2 link" to="/">Daniel Muñoz</Link>}
          </div>

          <div className="flex justify-end mt-1">
            {links.map(({ name, path }) => (
              <Link className="inline-block ml-4 text-xl link link__nav" to={path} key={path}>
                { name }
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
