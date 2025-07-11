import React from 'react'
import D4 from '@/assets/images/D4.webp'
import Image from 'next/image'

export const SmartRetailer = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
        <div className="mb-8 grid items-center gap-8 lg:mb-16 lg:grid-cols-12 lg:gap-12">
          <div className="col-span-6 text-center sm:mb-6 lg:mb-0 lg:text-left">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl xl:text-6xl">
              SMART RETAILER
            </h1>
            <p className="mx-auto mb-6 max-w-xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mx-0 xl:mb-8 xl:text-xl">
              Smart Retailer is an all-in-one system designed to simplify retail
              operations. It provides a Dashboard for quick insights, Customer
              and Product management, and easy tracking of Sales and Suppliers.
              With automated Purchasing processes and detailed Reports, it helps
              you make informed decisions. The customizable Settings ensure the
              platform fits your unique business needs. Smart Retailer is the
              perfect solution for businesses looking to streamline their
              operations and enhance efficiency.
            </p>
          </div>
          <div className="col-span-6 flex justify-center">
            <div className="ml-auto">
              <Image src={D4} className="dark:hidden" alt="mockup" />
              <Image src={D4} className="hidden dark:block" alt="mockup dark" />
            </div>
          </div>
        </div>

        <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
          <div className="flex justify-center">
            <svg
              className="mr-3 h-6 w-6 shrink-0 text-primary-600 dark:text-primary-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 3h7a1 1 0 011 1v7a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v5h5V5H4zM14 3h7a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v5h5V5h-5zM3 13h7a1 1 0 011 1v7a1 1 0 01-1 1H3a1 1 0 01-1-1v-7a1 1 0 011-1zm1 2v5h5v-5H4zM14 13h7a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-7a1 1 0 011-1zm1 2v5h5v-5h-5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>
              <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                Dashboard
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Central hub offering quick insights into business operations.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <svg
              className="mr-3 h-6 w-6 shrink-0 text-primary-600 dark:text-primary-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>
              <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                Customers
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Manage registered customers and their details.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <svg
              className="mr-3 h-6 w-6 shrink-0 text-primary-600 dark:text-primary-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>
              <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                Products
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Add and manage products, stock levels, and categorize items.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mt-8 grid gap-8 sm:gap-12 md:grid-cols-3">
          <div className="flex justify-center">
            <svg
              className="mr-3 h-6 w-6 shrink-0 text-primary-600 dark:text-primary-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>
              <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                Sales
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Track and manage sales invoices and transactions.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <svg
              className="mr-3 h-6 w-6 shrink-0 text-primary-600 dark:text-primary-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 2a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2H3zm7 11h2v2H10v-2zm0-4h2v2H10V9zm-4 4h2v2H6v-2zm0-4h2v2H6V5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>
              <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                Suppliers
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Manage supplier details and add new suppliers.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <svg
              className="mr-3 h-6 w-6 shrink-0 text-primary-600 dark:text-primary-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v12a1 1 0 01-2 0V3a1 1 0 011-1zm6 2a1 1 0 011 1v10a1 1 0 01-2 0V5a1 1 0 011-1zm-12 0a1 1 0 011 1v10a1 1 0 01-2 0V5a1 1 0 011-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>
              <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                Purchasing
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Handle GRNs (Goods Receipt Notes), create GRNs, and reorder
                items.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 sm:gap-12 md:grid-cols-3">
          <div className="flex justify-center">
            <svg
              className="mr-3 h-6 w-6 shrink-0 text-primary-600 dark:text-primary-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v14a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H6zM7 3h6v12H7V3z"
                clipRule="evenodd"
              ></path>
            </svg>

            <div>
              <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                Reports
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Generate sales, inventory, and customer insights through
                reports.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <svg
              className="mr-3 h-6 w-6 shrink-0 text-primary-600 dark:text-primary-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v14a1 1 0 11-2 0V3a1 1 0 011-1zM3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>

            <div>
              <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                Settings
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Customize system settings, including account management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
