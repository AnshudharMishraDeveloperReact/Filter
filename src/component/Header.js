import React from 'react'


function Header() {
  return (
    <div>
      <p style={headerClass}> FILTER APP </p>
    </div>
  )
}

const headerClass = { background: 'skyblue', padding: "1%", fontSize: "2rem" }

export default Header