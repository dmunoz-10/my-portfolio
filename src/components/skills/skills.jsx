import React, { Fragment } from 'react'
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from 'gatsby'

const Skills = ({ title, data, gridCol }) => {
  return (
    <div>
      <h2 className="text-3xl mb-6">{ title }</h2>

      <div className={`grid grid-cols-${gridCol}`}>
        {data.map(({ name, icon, color, skill }) => (
          <div className="flex flex-col justify-center my-4">
            {
            icon ?
              <i className={`${icon} text-6xl hover:${color}`} title={name}></i> :
              <h2 className="text-2xl">{ name }</h2>
            }
            <h4 className="mt-3">{ skill }</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

Skills.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string,
      color: PropTypes.string,
      skill: PropTypes.string.isRequired,
    }),
  ),
  gridCol: PropTypes.number.isRequired,
}

export default Skills