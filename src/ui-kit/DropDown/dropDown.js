import React from 'react'
import Select from 'react-select'

const DropDownFilter = ({options, handleChange}) => (
  <Select label={'test'} isSearchable isClearable  options={options} onChange={handleChange} />
)

export default DropDownFilter;