import React, { Fragment } from 'react'
import PropTypes from "prop-types"

const Skills = ({ title, data }) => {
  return (
    <Fragment>
      <h2 className="text-3xl mb-6">{ title }</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.map(({ name, icon, color, skill }) => (
          <div key={name} className="flex flex-col justify-center my-4">
            {
            icon ?
              <i className={`${icon} text-6xl ${color}`} title={name}></i> :
              <h2 className="text-2xl">{ name }</h2>
            }
            <h4 className="mt-3">{ skill }</h4>
          </div>
        ))}
      </div>
    </Fragment>
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
}

export default Skills