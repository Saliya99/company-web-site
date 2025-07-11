'use client'

import React, { useState } from 'react'

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false)

  const linkStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '15px 25px',
    backgroundColor: isHovered ? '#45a049' : '#4CAF50',
    color: '#fff',
    textAlign: 'center',
    fontSize: '20px',
    borderRadius: '10px',
    textDecoration: 'none', 
    transition: 'background-color 0.3s',
  }

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(17 24 39)',
    height: '12vh',
  }

  return (
    <div style={containerStyle}>
      <a
        href="/contact"
        className="my-5"
        style={linkStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Contact Now
      </a>
    </div>
  )
}

export default Contact
