import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      subject: '',
      email: '',
      message: '',
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { subject, email, message } = this.state
    const { author: { email: authorEmail } } = this.props.data.site.siteMetadata

    if (subject && email && message) {
      window.open(`mailto:${authorEmail}?cc=${email}&subject=${subject}&body=${message}`)
      this.setState({ subject: '', email: '', message: '' })
    } else {
      alert('Please fill out all fields')
    }
  }

  render () {
    const { data } = this.props
    const { subject, email, message } = this.state
    const { title } = data.site.siteMetadata

    return (
      <Layout location={this.props.location} title={title}>
        <SEO title="Contact" />

        <h2 className="text-5xl mb-3 text-center">Contact me</h2>

        <div className="mt-10">
          <form onSubmit={this.handleSubmit}>
            <div className="my-4 block">
              <label htmlFor="subject" className="block text-3xl">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                onChange={this.handleChange}
                value={subject}
                required
                className="
                  px-4 py-2 block w-full mt-3 transition duration-300 border border-gray-400
                  rounded focus:border-blue-600 focus:outline-none focus:ring focus:ring-blue-200
                "
              />
            </div>

            <div className="my-4 block">
              <label htmlFor="email" className="block text-3xl">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={this.handleChange}
                value={email}
                required
                className="
                  px-4 py-2 block w-full mt-3 transition duration-300 border border-gray-400
                  rounded focus:border-blue-600 focus:outline-none focus:ring focus:ring-blue-200
                "
              />
            </div>

            <div className="my-4 block">
              <label htmlFor="message" className="block text-3xl">Message</label>
              <textarea
                name="message"
                id="message"
                onChange={this.handleChange}
                value={message}
                required
                rows="9"
                className="
                  px-4 py-2 block w-full mt-3 transition duration-300 border border-gray-400
                  rounded focus:border-blue-600 focus:outline-none focus:ring focus:ring-blue-200
                  resize-y
                "
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="
                px-12 py-2 block mx-auto mt-8 text-lg font-semibold text-white transition-colors
                duration-300 rounded-md shadow bg-blue-600 hover:bg-blue-700 focus:outline-none
                focus:ring-blue-200 focus:ring-4
              "
            >
              Send
            </button>
          </form>
        </div>
      </Layout>
    )
  }
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          email
        }
      }
    }
  }
`