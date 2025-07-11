'use client'

import { Button } from 'flowbite-react'
import React from 'react'
import Image from 'next/image'
// import codingImage from '../images/front.webp'
// import codingImage from '../images/home2.webp'
import codingImage from '@/assets/images/newhome.webp'

const Hero = function () {
  return (
    <section className="bg-white px-1 dark:bg-gray-900 md:px-4 md:py-4">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-12 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7 xl:col-span-8">
          <h1 className="mb-4 mt-16 max-w-2xl text-6xl font-extrabold dark:text-white md:text-7xl">
            Building Digital Products & Brands.
          </h1>
          <p className="mb-6 max-w-2xl text-xl font-light text-gray-500 dark:text-gray-400 md:text-2xl lg:mb-8 lg:text-xl">
            We focus on markets where technology, innovation, and capital can
            unlock long-term value and drive economic growth.
          </p>

          <Button
            color={'primary'}
            href="/contact"
            className="w-48 cursor-pointer rounded-lg bg-primary-700 px-5 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 md:w-1/3"
          >
            <span className="text-lg font-semibold tracking-wide">
              Get Started
            </span>
          </Button>
        </div>
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex xl:col-span-4">
          <Image
            className="rounded-lg object-cover"
            src={codingImage}
            alt="phone illustration"
            width={700}
            height={700}
          />
        </div>
      </div>
    </section>
  )
}

export { Hero }
