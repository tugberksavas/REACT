import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>About</h1>
      <hr />
      <Link style={{marginRight:10}} to="employee">Calisanlar Hakkinda</Link>
      <Link  to="company">Sirket Hakkinda</Link>

      <Outlet />
    </div>
  )
}

export default About