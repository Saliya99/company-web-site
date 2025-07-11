import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { LaptopCode } from 'flowbite-react-icons/outline'
import { Bullhorn, Shapes } from 'flowbite-react-icons/outline'
import resultsImage from '../images/r2.jpg'

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      name: 'Web Development',
      icon: <LaptopCode className="text-blue-500" size={28} />,
      description:
        'Where frontend and backend developers create seamless interfaces and scalable solutions with innovative engineering.',
      link: '/services/web-development',
    },
    {
      id: 2,
      name: 'Web & Graphic Design',
      icon: <Shapes className="text-orange-500" size={28} />,
      description:
        'Elevate your brand with our creative graphic design services. From logos to web visuals.',
      link: '/services/graphic-design',
    },
    {
      id: 3,
      name: 'Digital Marketing',
      icon: <Bullhorn className="text-green-500" size={28} />,
      description:
        'Crafting tailored strategies to boost your online visibility, drive traffic, and convert leads into loyal customers.',
      link: '/services/digital-marketing',
    },
  ]

  return (
    <section className="bg-white pt-16 dark:bg-gray-800 md:px-4 md:py-24 lg:py-16 xl:py-24">
      <div className="mx-auto max-w-screen-lg px-4 xl:max-w-screen-xl">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl md:leading-tight">
          Crafting Digital Experiences That Drive Results
        </h2>
        <p className="font-light text-gray-400 md:text-xl xl:max-w-screen-md">
          We blend innovative web development, strategic digital marketing, and
          stunning graphic design to create impactful online experiences that
          elevate your brand and drive business growth.
        </p>
      </div>
      <div className="mx-auto max-w-screen-xl gap-8 px-4 py-8 pt-12 lg:mt-2 lg:grid lg:grid-cols-1 lg:px-6 xl:grid-cols-2 xl:gap-16">
        <Image
          className="mb-8 h-[500px] w-auto rounded-lg lg:mb-0"
          src={resultsImage}
          alt="feature image"
          width={200}
          height={200}
        />
        <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
          <div className="mb-6 flex flex-col gap-4">
            {services.map((service) => (
              <div
                className="flex pt-4 opacity-80 hover:opacity-100"
                key={service.id}
              >
                <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-50">
                  {service.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-gray-300 md:text-2xl">
                    {service.name}
                  </h3>
                  <p className="md:text-md mb-2 font-light text-gray-500 dark:text-gray-400">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-primary-600 hover:text-primary-800 dark:text-primary-600 dark:hover:text-primary-600 md:text-lg"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
