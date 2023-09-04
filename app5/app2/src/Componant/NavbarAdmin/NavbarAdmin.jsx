import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarAdmin() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Admin</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Aadd user</Link>
            </li>
          <li className="nav-item">
            <Link className="nav-link" to="Contact">Add blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="About">Add course</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
