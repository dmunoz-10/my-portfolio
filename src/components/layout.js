import React from 'react'
import Header from './header'
import Footer from './footer'
// import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div className="max-w-3xl mx-auto px-5 py-10">
        <Header rootPath={location.pathname === rootPath} />
        <main>{children}</main>
        <Footer />
      </div>
    )
  }
}

export default Layout
