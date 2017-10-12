import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <button type="button" className="btn btn-primary btn-sm">{children}</button>
  }

  return (
    <button
      type="button"
      className="btn btn-outline-primary btn-sm"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </button>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
