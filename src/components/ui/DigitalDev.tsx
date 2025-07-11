'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import n1 from '../images/n1.webp'
import n2 from '../images/n2.webp'
import n3 from '../images/n3.webp'
import n4 from '../images/n4.webp'

const DigitalDev: React.FC = () => {
  const slides = [
    {
      image: n1,
      header: '',
      description: '',
    },
    {
      image: n2,
      header: 'Content Marketing',
      description:
        'Enhance your online presence with strategic content that engages and converts.',
    },
    {
      image: n3,
      header: 'SEO Optimization',
      description:
        "Boost your website's visibility with advanced SEO techniques.",
    },
    {
      image: n4,
      header: 'Social Media Management',
      description:
        'Connect with your audience and grow your brand on social platforms.',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div style={styles.sliderContainer}>
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            ...styles.slide,
            transform: `translateX(${(index - currentIndex) * 100}%)`,
          }}
        >
          <Image
            src={slide.image}
            alt={slide.header || 'Digital Marketing Slide'}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div style={styles.textContainer}>
            <h1 style={index === 0 ? styles.mainHeader : styles.smallHeader}>
              {slide.header}
            </h1>
            {index !== 0 && (
              <p style={styles.description}>{slide.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  sliderContainer: {
    position: 'relative',
    width: '100%',
    height: '500px',
    overflow: 'hidden',
    display: 'flex',
  },
  slide: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transition: 'transform 0.5s ease-in-out',
  },
  textContainer: {
    position: 'absolute',
    top: '30%',
    left: '10%',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
  },
  mainHeader: {
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  smallHeader: {
    fontSize: '3rem',
    fontWeight: 600,
  },
  description: {
    marginTop: '10px',
    fontSize: '1rem',
    maxWidth: '400px',
  },
}

export default DigitalDev
