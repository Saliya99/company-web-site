'use client'
import React from 'react'
import Image from 'next/image'
import advantage_gl from '../images/advantage_gl.webp'

const SmartSalesmanCta = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
        <Image
          className="w-full dark:hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          alt="office image"
          width={200}
          height={100}
        />
        <Image
          className="hidden w-full dark:block"
          src={advantage_gl}
          alt="advantage_gl"
          width={200}
          height={100}
        />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            SMART SALESMAN - Benefits
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            SFA is a sophisticated tool for sales managers: something that
            become your right hand. It automates many of the routine tasks
            required of managers such as updating spreadsheets, counting sales
            visits and tallying last-minute Friday night reports. The data is
            recorded in real-time to a cloud by the SFA. Managers download a
            weekly report straight to their email. The real-time nature of the
            data entry also improves a sales manager’s tactical decision-making
            skills. As a routine practice, sales people upload data into their
            CRM at the end of the week when the majority of the information is
            either forgotten or left incomplete. Managers are left with just a
            partial overview of which clients were visited, deal status, sales
            cycle progression, etc. Smart Salesman becomes handy with accurate,
            real-time sales data managers can identify which territories need
            more coverage, bottlenecks in the sales pipeline.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default SmartSalesmanCta
