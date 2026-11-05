import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>Home
  <Link to={'/contact'}>contact</Link>
    </div>
  )
}

export default Home