import React from 'react'
import { graphql } from 'gatsby'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import ReactMarkdownWithHtml from 'react-markdown'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Skills from '../components/skills'

class Resume extends React.Component {
  render() {
    const { data } = this.props
    const cvURL = data.cv.publicURL
    const { title, author } = data.site.siteMetadata
    const { workExperience, education, skills } = author
    const {
      languages,
      programmingLanguages,
      frameworks,
      databases,
      devops,
    } = skills

    return (
      <Layout location={this.props.location} title={title}>
        <SEO title="Resume" />

        <h2 className="text-5xl mb-3 text-center">Resume</h2>

        <div className="my-10 w-full flex justify-end">
          <a
            href={cvURL}
            className="text-gray-900 font-bold py-2 px-4 rounded inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-download mr-2"></i>
            <span>See & Download CV</span>
          </a>
        </div>

        <div className="grid grid-cols-1 divide-y-2 divide-blue-500">
          <section className="py-20 text-center" id="work-experience">
            <h4 className="text-base mb-1 text-blue-600">Work Experience</h4>

            <div className="mt-4">
              <VerticalTimeline>
                {workExperience.map(
                  ({ company, title, description, from, to }) => (
                    <VerticalTimelineElement
                      key={from}
                      className="vertical-timeline-element--work"
                      contentStyle={{
                        padding: '1rem',
                        background: 'white',
                        color: 'black',
                        borderTop: '4px solid rgb(33, 150, 243)',
                      }}
                      contentArrowStyle={{
                        borderRight: '7px solid  rgb(33, 150, 243)',
                      }}
                      date={`${from} - ${to}`}
                      dateClassName="text-left"
                      iconStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: 'white',
                      }}
                      icon={
                        <i className="fas fa-briefcase md:text-3xl mt-3 md:mt-4"></i>
                      }
                      visible={true}
                    >
                      <h3 className="text-lg font-semibold mb-2">{`${title} at ${company.name}`}</h3>
                      <h4 className="vertical-timeline-element-subtitle text-xs">
                        {company.place}
                      </h4>
                      <ReactMarkdownWithHtml>{description}</ReactMarkdownWithHtml>
                    </VerticalTimelineElement>
                  )
                )}
              </VerticalTimeline>
            </div>
          </section>

          <section className="py-20 text-center" id="work-experience">
            <h4 className="text-base mb-1 text-pink-600">Education</h4>

            <div className="mt-4">
              <VerticalTimeline>
                {education.map(({ institute, title, from, to }) => (
                  <VerticalTimelineElement
                    key={from}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      padding: '1rem',
                      background: 'white',
                      color: 'black',
                      borderTop: '4px solid rgb(245, 0, 87)',
                    }}
                    contentArrowStyle={{
                      borderRight: '7px solid  rgb(245, 0, 87)',
                    }}
                    date={`${from} - ${to}`}
                    dateClassName="text-left"
                    iconStyle={{
                      background: 'rgb(245, 0, 87)',
                      color: 'white',
                    }}
                    icon={
                      <i className="fas fa-graduation-cap md:text-3xl mt-3 md:mt-4"></i>
                    }
                    visible={true}
                  >
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <h4 className="vertical-timeline-element-subtitle text-xs">
                      {institute}
                    </h4>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
          </section>

          <section className="py-20 text-center" id="skills">
            <h4 className="text-base mb-4 text-purple-600">Skills</h4>

            <div className="space-y-8">
              <Skills
                title="Programming Languages"
                data={programmingLanguages}
              />
              <Skills title="Frameworks" data={frameworks} />
              <Skills title="Databases" data={databases} />
              <Skills title="Devops" data={devops} />
              <Skills title="Languages" data={languages} />
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Resume

export const pageQuery = graphql`
  query {
    cv: file(absolutePath: { regex: "/cv.pdf/" }) {
      publicURL
    }
    site {
      siteMetadata {
        title
        author {
          workExperience {
            company {
              name
              place
            }
            title
            description
            from
            to
          }
          education {
            institute
            title
            from
            to
          }
          skills {
            languages {
              name
              skill
            }
            programmingLanguages {
              name
              icon
              color
              skill
            }
            frameworks {
              name
              icon
              color
              skill
            }
            databases {
              name
              icon
              color
              skill
            }
            devops {
              name
              icon
              color
              skill
            }
          }
        }
      }
    }
  }
`
