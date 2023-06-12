import React from 'react'
import Proptypes from 'prop-types'



export default function Navbar(prop) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{prop.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{prop.about}</a>
              </li>
            </ul>
            <div className={`form-check form-switch mx-3 text-${prop.mode === 'dark' ? 'light' : 'dark' }`} >
              <input className="form-check-input" type="checkbox" onClick={prop.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{prop.mode === 'dark' ? 'Light' : 'Dark'} Mode</label>
            </div>

          </div>
        </div>
      </nav>
  )
}

