import React from 'react'
import PropTypes from 'prop-types'
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
  const isInRootPath = rootPath === location
  const links = [
    { name: 'Posts', path: '/posts' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header>
      <div className="container mx-auto pb-12">
        <nav className="w-full px-4 rounded relative md:flex items-stretch justify-between">
          <div className="flex flex-no-shrink items-stretch justify-start">
            {!isInRootPath && (
              <Link
                className="text-2xl link flex-no-grow flex-no-shrink relative flex"
                to="/"
              >
                <div className="flex justify-center">
                  <Image
                    className="mr-4 mb-0 rounded-full mt-1 border-solid border-2 border-gray-300"
                    fixed={data.avatar.childImageSharp.fixed}
                    alt={author.name}
                    style={{ minWidth: 50 }}
                  />
                  <span className="my-auto">{author.name}</span>
                </div>
              </Link>
            )}
          </div>

          <div
            className={`md:flex md:items-stretch md:flex-no-shrink md:flex-grow
              ${isInRootPath ? 'mt-0' : 'mt-10'} md:mt-1`}
          >
            <div className="flex md:items-stretch md:justify-end justify-center ml-auto">
              {links.map(({ name, path }) => (
                <Link
                  className={`inline-block ml-4 pt-3 text-xl link link__nav${
                    location === path ? '--active' : ''
                  }`}
                  to={path}
                  key={path}
                >
                  {name}
                </Link>
              ))}
            </div>
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
