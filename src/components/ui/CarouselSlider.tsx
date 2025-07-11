'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

// Image imports
import office2 from '@/assets/images/w1.webp'
import office from '@/assets/images/w2.webp'
import conference from '@/assets/images/w3.webp'
import gwp from '@/assets/images/w4.webp'
import mao from '@/assets/images/w5.webp'
import meeting from '@/assets/images/w6.webp'
import wfh from '@/assets/images/w7.webp'
import workspace from '@/assets/images/w8.webp'

const StatsSection = () => {
  const images = [
    office2,
    office,
    conference,
    gwp,
    mao,
    meeting,
    wfh,
    workspace,
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  // Automatically switch slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <section className="bg-white py-8 dark:bg-gray-900 lg:py-16">
      <div className="mx-auto mb-8 max-w-screen-md px-4 text-center md:mb-16 lg:px-0">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl">
          Building the Future with Cutting-Edge Solutions
        </h2>
      </div>

      {/* Carousel Section */}
      <div className="relative mx-auto max-w-screen-xl px-16 sm:px-24">
        <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
          {images.map((image, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-700 ${
                idx === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Slide ${idx + 1}`}
                width={800}
                height={500}
                className="h-full w-full rounded-lg object-cover"
                priority
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="group absolute left-0 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gray-800/30 hover:bg-gray-800/60 focus:outline-none"
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="group absolute right-0 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gray-800/30 hover:bg-gray-800/60 focus:outline-none"
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Stats Section */}
      <dl className="mx-auto mt-8 grid max-w-screen-xl grid-cols-2 gap-8 text-gray-900 dark:text-white sm:grid-cols-3 lg:mt-14 xl:grid-cols-6">
        {[
          { value: '50+', label: 'Developers' },
          { value: '1k+', label: 'Public repositories' },
          { value: '500', label: 'Open source projects' },
          { value: '100k', label: 'Contributors' },
          { value: '10+', label: 'Top Forbes companies' },
          { value: '1k', label: 'Organizations' },
        ].map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold md:text-4xl">
              {stat.value}
            </dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default StatsSection
