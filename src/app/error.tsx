'use client'

import React from 'react'
import Image from 'next/image'

export default function error() {
  return (
    <section className="flex flex-grow items-center bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <Image
            className="mx-auto mb-4"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/500/500.svg"
            alt="404 Not Found"
            width={400}
            height={400}
          />
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-primary-600 dark:text-primary-500 lg:text-9xl">
            500
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Internal Server Error.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            We are already working to solve the problem.{' '}
          </p>
        </div>
      </div>
    </section>
  )
}
