import React from 'react'
import Image from 'next/image'
import n1 from '@/assets/images/admin.webp'
import n2 from '@/assets/images/teacher.webp'
import n3 from '@/assets/images/Student.webp'
import n4 from '@/assets/images/Parents.webp'

export const SchoolMan = () => {
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
              src={n1}
              alt="Dashboard"
              width={600}
              height={600}
            />
            <p className="mt-2 text-sm">Admin Dashboard</p>
          </div>
          <div className="relative">
            <Image
              className="rounded-lg"
              src={n2}
              alt="Customer Dashboard"
              width={600}
              height={600}
            />
            <p className="mt-2 text-sm">Teacher Dashboard</p>
          </div>
          <div className="relative">
            <Image
              className="rounded-lg"
              src={n3}
              alt="Products"
              width={600}
              height={600}
            />
            <p className="mt-2 text-sm">Student Deshbord</p>
          </div>
          <div className="relative">
            <Image
              className="rounded-lg"
              src={n4}
              alt="Sales"
              width={600}
              height={600}
            />
            <p className="mt-2 text-sm">Parents Dashbord</p>
          </div>
        </div>
      </div>
    </section>
  )
}
