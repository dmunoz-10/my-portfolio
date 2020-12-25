import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const author = data.site.siteMetadata.author

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} />

        <div className="flex mb-20 flex-col md:flex-row">
          <Image
            className="mx-auto md:mr-4 mb-0 rounded-full"
            fixed={data.avatar.childImageSharp.fixed}
            alt={author.name}
            style={{
              minWidth: 250,
            }}
          />

          <div className="my-auto">
            <h2 className="text-4xl md:text-5xl text-center md:text-left mt-5 md:mt-0">Hey! I'm <strong>Daniel</strong></h2>
            <p className="text-2xl md:text-3xl mt-2 md:mt-0">
              I'm a web developer focus mostly on <strong>back-end</strong>
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl mb-4">About me</h2>

          <p className="text-xl">
            I'm currently working as a back-end developer with Ruby on Rails, although sometimes
            I work on some personal frontend projects in ReactJs and VueJs. I'm so passionate at
            coding and learn new stuff every day by myself.<br/><br/>

            I usually code on Linux, actually I like Kubuntu distribution, I think is easier and
            less painful to code on Linux than on Windows. Ruby is actually my favorite programming
            language and Rails my favorite framework, I think both are great technologies for web
            development, and NOT, Ruby is NOT dead, if you don't believe me, just
            check <a href="https://isrubydead.com/" target="_blank" rel="noopener noreferrer">this</a> out 😉.<br/><br/>

            I'm a cinephile, my favorite movie is <strong>Donnie Darko</strong>, is an amazing movie,
            the first time I saw it, it hit right in my feels when I was younger.
            I'm also a <strong>Naruto</strong> fan, a great and mature anime that has gained a lot of
            fans around the world, and lately <strong>Berserk</strong> has become one of my favorite
            mangas. Sometimes I like to read, I've read some of Stephen King's books: Carrie, Misery
            and Mr. Mercedes, I'll probably read more books of this amazing author. And I think there's
            no more things to say, just one last thing, I like pizza with pineapple 🙂🍕.
          </p>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/panda-profile.jpg/" }) {
      childImageSharp {
        fixed(width: 250, height: 250, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
  }
`
