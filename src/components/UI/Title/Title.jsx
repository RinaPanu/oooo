import React from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'
// import styled from 'styled-components'

const Title = ({ size, isUppercase, className, children, ...attrs }) => {
  const classes = classNames(`ui-title-${size}`, className, { isUppercase })

  return (
    <p
      className={classes}
      {...attrs}
    >
      {children}
    </p>
  )
}

Title.propTypes = {
  size: propTypes.oneOf(['1','2','3']),
  className: propTypes.string,
  children: propTypes.node.isRequired,
}

Title.defaultProps = {
  size: '1',
  className: '',
}
export default Title