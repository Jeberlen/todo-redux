import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
  <button
    type="button"
    className={completed ? "list-group-item list-group-item-secondary list-group-item-action disabled" :
      "list-group-item list-group-item-primary list-group-item-action"}
    onClick={onClick}
    style={{
      whiteSpace: 'normal',
      wordBreak: 'keep-all',
      wordWrap: 'breakWord',
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </button>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
