import React from 'react'
import Image from 'next/image'

import D2 from '../images/Dashbord1.webp'
import D1 from '../images/D2.webp'
import D3 from '../images/D3.webp'
import D5 from '../images/D5.webp'
import D6 from '../images/D6.webp'
import D7 from '../images/D7.webp'

export const Smart = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:text-center lg:px-12 lg:py-16">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          All-in-One Management System
        </h2>
        <p className="lg:px-38 font-light text-gray-500 dark:text-gray-400 sm:text-lg md:px-20 xl:px-48">
          Simplify and optimize your retail operations with Smart Retailer. From
          managing customers and products to tracking sales, suppliers, and
          reports, everything you need is in one place for seamless business
          management.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="relative">
            <Image
              className="rounded-lg"
              src={D2}
              alt="Dashboard"
              width={600}
              height={600}
            />
            <p className="mt-2 text-sm">Dashboard</p>
          </div>
          <div className="relative">
            <Image
              className="rounded-lg"
              src={D1}
              alt="Customer Dashboard"
              width={600}
              height={600}
            />
            <p className="mt-2 text-sm">Customer Dashboard</p>
          </div>
          <div className="relative">
            <Image
              className="rounded-lg"
              src={D3}
              alt="Products"
              width={600}
              height={600}
            />
            <p className="mt-2 text-sm">Products</p>
          </div>
          <div className="relative">
            <Image
              className="rounded-lg"
              src={D5}
              alt="Sales"
              width={600}
              height={600}
            />
            <p className="mt-2 text-sm">Sales</p>
          </div>
          <div className="relative">
            <Image
              className="rounded-lg"
              src={D6}
              alt="Purchasing"
              width={600}
              height={600}
            />
            <p className="mt-2 text-sm">Purchasing</p>
          </div>
          <div className="relative">
            <Image
              className="rounded-lg"
              src={D7}
              alt="Reports"
              width={600}
              height={600}
            />
            <p className="mt-2 text-sm">Reports</p>
          </div>
        </div>
      </div>
    </section>
  )
}
