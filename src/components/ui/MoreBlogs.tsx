'use client'
import React from 'react'
import Image from 'next/image'
import cgl from '@/assets/images/cgl1.webp'
import tea from '@/assets/images/tea.webp'
import sea from '@/assets/images/seeo.webp'
import Link from 'next/link'

const SectionComponent = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
            Recent Post
          </h2>
        </div>
        <div className="my-16 mb-24 grid gap-8 lg:grid-cols-3 lg:divide-x lg:divide-gray-200 dark:lg:divide-gray-700">
          <article className="text-center">
            <Image
              className="mx-auto mb-5 rounded-lg"
              src={tea}
              alt="blog image"
              width={200}
              height={100}
            />
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <Link href="https://royal-ceylon.com/">
                Royal Ceylon: A Legacy of Luxury and Tradition
              </Link>
            </h2>
            <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
              Steeped in history and crafted with precision, Royal Ceylon brings
              you the finest Sri Lankan tea, embodying the rich heritage and
              exquisite flavors of Ceylon&apos;s renowned tea estates. Our
              journey is one of passion and commitment—to honor tradition,
              embrace sustainability, and deliver an unparalleled tea experience
              to the world.
            </p>
            <Link
              href="https://royal-ceylon.com/"
              className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Read more
              <svg
                className="ml-2 h-4 w-4"
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
            </Link>
          </article>

          <div className="space-y-8 lg:pl-8">
            <article className="text-center">
              <Link href="https://migrateto-canada.com/">
                <Image
                  className="mx-auto mb-5 rounded-lg" // added mx-auto for center alignment
                  src={cgl}
                  alt="blog image"
                  width={180}
                  height={100}
                />
              </Link>
              <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="https://migrateto-canada.com/">
                  Canada Gateway Immigration Consultants: Your Trusted Pathway
                  to a New Beginning
                </a>
              </h2>
              <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                Relocating to a new country is a life-changing experience, and
                at Canada Gateway Immigration Consultants, we ensure that your
                journey is smooth, successful, and stress-free. As a
                customer-centric consultancy, we take pride in providing
                personalized immigration solutions tailored to each
                individual&apos;s needs. Our expert team guides you through
                every step, ensuring compliance with all legal requirements and
                maximizing your chances of visa approval.
              </p>
              <Link
                href="https://migrateto-canada.com/"
                className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Read more
                <svg
                  className="ml-2 h-4 w-4"
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
              </Link>
            </article>
          </div>
          <div className="space-y-8 lg:pl-8">
            <article className="text-center">
              <Image
                className="mx-auto mb-5 rounded-lg" // added mx-auto for center alignment
                src={sea}
                alt="blog image"
                width={200}
                height={100}
              />
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Link href="https://www.linkedin.com/posts/avishka-vinod-57723921a_in-todays-digital-world-seo-is-key-to-increasing-activity-7295702536039059456-Y0m7/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADc1KusBw8nyoE3NYO-9mGJxKR5gfcJvRdE">
                  12 SEO Best Practices That Everyone Should Follow
                </Link>
              </h2>
              <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                Discover the 12 essential SEO best practices to boost your
                website&apos;s ranking, improve visibility, and drive more
                organic traffic. From keyword optimization to
                mobile-friendliness, these tips will help you stay ahead in
                search results.
              </p>
              <a
                href="https://www.linkedin.com/posts/avishka-vinod-57723921a_in-todays-digital-world-seo-is-key-to-increasing-activity-7295702536039059456-Y0m7/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADc1KusBw8nyoE3NYO-9mGJxKR5gfcJvRdE"
                className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Read more
                <svg
                  className="ml-2 h-4 w-4"
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
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionComponent
