import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import salesmanImage from '../images/smartsalesman.webp'
import retailerImage from '../images/smart_retailer.webp'
import schoolImage from '../images/school1.webp'

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: 'Smart Retailer',
      image: retailerImage,
      description:
        'Intuitive POS system designed to simplify sales, inventory management, and customer interactions, helping retailers run more efficiently and grow their business.',
      link: '/products/smart-retailer',
    },
    {
      id: 2,
      name: 'Smart Salesman',
      image: salesmanImage,
      description:
        'Mobile app for delivery drivers in distribution companies, offering real-time tracking, route optimization, and seamless communication for efficient deliveries.',
      link: '/products/smart-salesman',
    },
    {
      id: 3,
      name: 'Digital School',
      image: schoolImage,
      description:
        'Comprehensive school management system that streamlines administration, improves communication, and enhances the learning experience for students and staff alike.',
      link: '/products/digital-school',
    },
  ]

  return (
    <section className="bg-white px-2 py-24 dark:bg-gray-900 md:px-8 lg:px-6">
      <div className="mx-auto max-w-screen-xl px-2 py-8 lg:px-6 lg:py-16">
        <div className="text-center text-gray-900 md:mb-24">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl">
            Powerful Products, Real Results
          </h2>
          <p className="inline-flex items-center text-xl font-medium text-gray-400">
            Explore our site of solutions designed to streamline your processes
            and accelerate growth.
          </p>
        </div>
        <div className="mx-8 mt-12 grid justify-items-center gap-8 md:mx-0 md:grid-cols-2 md:gap-y-24 lg:mt-14 lg:grid-cols-3 lg:gap-12 lg:gap-x-16">
          {products.map((item) => (
            <div
              className="mb-2 flex flex-col gap-2 opacity-80 hover:opacity-100 md:mb-0"
              key={item.id}
            >
              <Image
                className="mr-4 w-60 rounded-lg md:h-32 md:w-32"
                src={item.image}
                alt={item.name}
                width={400}
                height={400}
              />
              <div>
                <h3 className="mb-2.5 text-2xl font-bold text-gray-900 dark:text-gray-300 md:mt-4 md:text-2xl">
                  {item.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-500 md:text-lg">
                  {item.description}
                </p>
              </div>
              <Link
                href={item.link}
                className="mt-1 inline-flex items-center text-primary-600 hover:text-primary-800 dark:text-primary-600 dark:hover:text-primary-600 md:text-lg"
              >
                Learn more
                <svg
                  className="ml-1 h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
