import React from 'react'
import { PropTypes } from 'prop-types'
import 'bootstrap5/src/css/bootstrap.min.css'

function Header(props) {
  const {branding} = props
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark mb-4'>
      <div className='container'>
        <a href='/' className='navbar-brand'>Contact Manager</a>

        <div>
          <ul className='navbar-nav mr-auto'>
            <li>
              <a href='/about' className='nav-link'>About</a>
            </li>
            <li>
              <a href='/add-contact' className='nav-link'>Add Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  branding: 'user'
}

Header.propTypes = {
  branding: PropTypes.string.isRequired
}

export default Header
