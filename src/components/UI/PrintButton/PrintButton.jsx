import React from "react";
import propTypes from 'prop-types'

// icons:
import { ReactComponent as PrintIcon } from '../../../assets/icons/print.svg'

const PrintButton = ({ onClick }) => {
  return (
        <div className='Header_content'>
          <button className='ui-button isLink' onClick={onClick}>
            <PrintIcon style={{ marginRight: '0.6rem' }} />
            Print
          </button>
        </div>
  )
}

PrintButton.propTypes = {
  onClick: propTypes.func,
}

PrintButton.defaultProps = {
  onClick: () => {},
}

export default PrintButton