'use client'
import React from 'react'
import Image from 'next/image'
import samrt_salesman_gl from '../images/Smart-Salesman.webp'

const SmartSalesmanIntro = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="text-center">
          <Image
            className="mx-auto hidden w-auto object-contain dark:block"
            src={samrt_salesman_gl}
            alt="Flowbite logo dark"
            width={100}
            height={100}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                SMART SALESMAN
              </h3>
              <p className="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                Sales Force Automation Software (SMART SALESMAN)
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                What is SMART SALESMAN
              </h3>
              <p className="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                SMART SALESMAN is used to automate the business tasks such as
                inventory control system, account management, process
                management, contact management, customer tracking, sales funnel
                management, sales forecasting analysis, product knowledge, sales
                lead tracking system, sales team performance evaluation, etc.
                The Sales Force Automation Software (SFA) can be customized
                according to the business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SmartSalesmanIntro
