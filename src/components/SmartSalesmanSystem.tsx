import React from 'react'
import Image from 'next/image'

import dashbord_gl from '../images/dasgbord_gl.webp'
import charts_gl from '../images/charts_gl.webp'
import reports_gl from '../images/repots_gl.webp'
import invoice_gl from '../images/invoice_gl.webp'

export const SmartSalesmanSystem = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:text-center lg:px-12 lg:py-16">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          All-in-One Management System
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="relative">
            <Image
              className="rounded-lg"
              src={dashbord_gl}
              alt="Dashboard"
              width={600}
              height={600}
            />
            <p className="mt-2 text-sm">Dashboard</p>
          </div>
          <div className="relative">
            <Image
              className="rounded-lg"
              src={reports_gl}
              alt="Customer Dashboard"
              width={600}
              height={600}
            />
            <p className="mt-2 text-sm">Reports</p>
          </div>
          <div className="relative">
            <Image
              className="rounded-lg"
              src={charts_gl}
              alt="Products"
              width={600}
              height={600}
            />
            <p className="mt-2 text-sm">Charts</p>
          </div>
          <div className="relative">
            <Image
              className="rounded-lg"
              src={invoice_gl}
              alt="Sales"
              width={600}
              height={600}
            />
            <p className="mt-2 text-sm">Invoice</p>
          </div>
        </div>
      </div>
    </section>
  )
}
