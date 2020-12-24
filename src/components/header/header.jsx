import React, { Fragment } from 'react'
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from 'gatsby'
import './styles.scss'
import Image from 'gatsby-image'

const Header = ({ rootPath, location }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      avatar: file(absolutePath: { regex: "/panda-profile.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, cropFocus: CENTER) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata

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
          {!(rootPath === location) &&
            <Fragment>
              <Image
                className="mr-4 mb-0 mt-1 rounded-full border-solid border-2 border-gray-300"
                fixed={data.avatar.childImageSharp.fixed}
                alt={author.name}
                style={{ minWidth: 50 }}
              />
              <Link className="text-2xl mt-2 link" to="/">{ author.name }</Link>
            </Fragment>}
          </div>

          <div className="flex justify-end mt-1">
            {links.map(({ name, path }) => (
              <Link
                className={`inline-block ml-4 text-xl link link__nav${location === path ? '--active' : ''}`}
                to={path}
                key={path}
              >
                { name }
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  rootPath: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}

export default Header
