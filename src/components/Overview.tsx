'use client'
import React from 'react'
import about from '../images/about.webp'
import Image from 'next/image'

const Overview = function () {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:py-10 lg:px-6 lg:py-6">
       
        <div className="mx-auto mt-2 max-w-5xl lg:mt-2">
          <Image
            className="w-full rounded-lg shadow-lg"
            src={about}
            alt="Content image"
            width={150}
            height={50}
          />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                OUR BUSINESS VALUES
              </h3>
              <ul className="mt-4 space-y-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                <li>
                  Money back guarantee and customer satisfaction is our
                  trademark.
                </li>
                <li>
                  Our motto is to provide quality and meet customer
                  expectations, delivering the right product backed with supreme
                  service quality.
                </li>
                <li>
                  We provide prompt and proactive communication in order to
                  provide supreme customer delight.
                </li>
                <li>
                  Business Ethics: To be honest, dedicated, fair, transparent,
                  sincere, and open with all our customers.
                </li>
                <li>
                  Provide our customers with innovative and technically advanced
                  software solutions that lead to a business advantage.
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                VISION
              </h3>
              <p className="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                ENHANCE BUSINESS EFFICIENCY THROUGH DIGITIZATION AND CUSTOM
                SOFTWARE
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                MISSION
              </h3>
              <p className="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                TO DELIVER INNOVATIVE AND CUSTOM MADE SOFTWARE SOLUTIONS TO MEET
                CUSTOMER NEEDS LEADING TO BUSINESS GROWTH
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Overview }
