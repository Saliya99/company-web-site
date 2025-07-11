'use client'

import { Button } from 'flowbite-react'
import React from 'react'

export default function CenteredCta() {
  return (
    <section className="bg-white pb-32 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl rounded-lg bg-gray-800 px-4 py-16 sm:py-16 lg:px-6">
        <div className="mx-auto flex max-w-screen-md flex-col items-center text-center">
          <h2 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-5xl">
            Transform Your Ideas into Reality
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-xl">
            Partner with us to create custom software solutions that drive
            success for your business.
          </p>
          <Button
            color={'primary'}
            href="/contact"
            className="w-48 cursor-pointer rounded-lg bg-primary-700 px-5 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 md:w-1/3 lg:w-48"
          >
            <span className="text-lg font-semibold tracking-wide">
              Get Started
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}
