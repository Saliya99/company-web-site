'use client'
import React from 'react'
import Image from 'next/image'
import advantage from '../images/advantage_gl.webp'
import smart from '../images/Smart.webp'
import school from '../images/school.webp'
import Link from 'next/link'

const SectionComponent = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Our Blog
          </h2>
          <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800">
            <Link href="products/smart-retailer">
              <Image
                className="mb-5 rounded-lg mx-auto"
                src={smart}
                alt="office content 1"
                width={100}
                height={100}
              />
            </Link>
            <span className="mr-2 rounded bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-800 dark:bg-purple-200 dark:text-purple-900">
              Article
            </span>
            <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <Link href="products/smart-retailer">Smart Retailer: Revolutionizing Your Retail Experience</Link>
            </h2>
            <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
              In today&apos;s competitive retail market, success isn&apos;t just about selling products—it&apos;s 
              about delivering an exceptional experience. Enter Smart Retailer, the ultimate all-in-one 
              system designed to simplify operations, boost efficiency, and drive growth. Whether you run a 
              small shop or a large retail chain, Smart Retailer empowers you with the tools needed 
              to stay ahead of the game..
            </p>
            <div className="flex items-center space-x-4">
              {/* <Image
                className="h-10 w-10 rounded-full"
                src={"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"}
                alt="Jese Leos avatar"
                width={100}
                height={100}
              /> */}
              {/* <div className="font-medium dark:text-white">
                <div>Avishka Vinod</div>
                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Aug 15, 2024 · 16 min read
                </div>
              </div> */}
            </div>
          </article>
          <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800">
            <Link href="products/smart-salesman">
              <Image
                className="mb-5 rounded-lg mx-auto"
                src={advantage}
                alt="Google HQ"
                width={100}
                height={100}
              />
            </Link>
            <span className="mr-2 rounded bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-800 dark:bg-purple-200 dark:text-purple-900">
              Article
            </span>
            <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <Link href="products/smart-salesman">SMART SALESMAN: Revolutionizing Business Automation</Link>
            </h2>
            <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
              In today&apos;s fast-paced business world, efficiency and accuracy are key to staying 
              ahead of the competition. Enter SMART SALESMAN, an innovative Sales Force Automation (SFA) 
              software designed to transform the way businesses handle their operations. From inventory 
              control to sales team performance evaluation, 
              SMART SALESMAN empowers businesses with cutting-edge automation, ensuring streamlined 
              processes and improved productivity..
            </p>
            <div className="flex items-center space-x-4">
              {/* <Image
                className="h-10 w-10 rounded-full"
                src={"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"}
                alt="Roberta Casas avatar"
                width={100}
                height={100}
              /> */}
              {/* <div className="font-medium dark:text-white">
                <div>Nimni Yashoda</div>
                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Mar 15, 2024 · 16 min read
                </div>
              </div> */}
            </div>
          </article>
          <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800">
            <Link href="products/digital-school">
              <Image
                className="mb-5 rounded-lg mx-auto"
                src={school}
                alt="office laptops"
                width={100}
                height={100}
              />
            </Link>
            <span className="mr-2 rounded bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-800 dark:bg-purple-200 dark:text-purple-900">
              Article
            </span>
            <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <Link href="products/digital-school">Digital School Management System: Transforming Education</Link>
            </h2>
            <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
              Simplify school operations with our Digital School Management System—an all-in-one 
              platform that streamlines administration, enhances communication, and empowers educators, students, 
              and parents. From student records to financial management, experience 
              seamless efficiency and smarter learning.
            </p>
            <div className="flex items-center space-x-4">
              {/* <Image
                className="h-10 w-10 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Sofia McGuire avatar"
                width={100}
                height={100}
              /> */}
              {/* <div className="font-medium dark:text-white">
                <div>Ashan Manuka</div>
                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Jully 19, 2024 · 21 min read
                </div>
              </div> */}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default SectionComponent
