import React from 'react'
import PropTypes from 'prop-types'

import './layout.css'

const Layout = ({ children }) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: `0 auto`,
      padding: 0,
    }}
  >
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
