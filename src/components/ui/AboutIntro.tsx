'use client'
import React from 'react'
import Image from 'next/image'
// import officeLong from '@/assets/images/office-long-2.webp'
import officeLong1 from '@/assets/images/vi2.webp'
import officeLong from '@/assets/images/A1.webp'
// import officeLong1 from '@/assets/images/A2.webp'

const SectionComponent = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
        <div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white xl:text-7xl">
            Digitize, and improve revenue & efficiency
          </h2>
          <p className="mb-4">
            We consider you as our business partner. Our motto is to vision your
            business need, digitize your business process to enhance sales and
            revenue. Our developers gather your need, customize the solution,
            and then provide a money back guaranteed solution to get the right
            results. The developed solutions offer complete technical backing to
            all business processes and help businesses to solve organizational
            challenges, improve sales, and customer engagement. From project
            ideation to release in the market, we deliver our clients with the
            best software development service for their business.
          </p>
          <p>
            We focus on your product marketing and design inspiring and
            brand-focused design solutions that impress and promote user
            experience. Our user experiences designs are customer-friendly,
            attractive and we provide as many options for you to select what you
            like.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <Image
            className="w-full rounded-lg"
            src={officeLong}
            alt="office content 1"
            width={200}
            height={100}
          />
          <Image
            className="mt-4 w-full rounded-lg lg:mt-10"
            src={officeLong1}
            alt="office content 2"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  )
}

export default SectionComponent
