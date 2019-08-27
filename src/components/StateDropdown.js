import React from 'react'
import Select from 'react-select'

const StateDropdown = props => {
  return (
    <Select
      className='mb-2'
      options={props.options}
      placeholder='Search for a State'
      onChange={selected => {
        props.handleInputChange(selected.value)
      }}
    />
  )
}

export default StateDropdown
