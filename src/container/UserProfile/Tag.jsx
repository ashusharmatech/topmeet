import React from 'react'

const Tag = ({label}) => {
  return (
    <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{label}</span>
  )
}

export default Tag