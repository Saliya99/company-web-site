import React from 'react'
import Image from 'next/image'
import DS from '../images/DS.webp'

export const SchoolDev = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="text-center">
          <h1 className="ml-5 text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            DIGITAL SCHOOL MANAGEMENT SYSTEM
          </h1>

          <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:mt-5 sm:flex-row sm:gap-8">
            <a
              href="#"
              title=""
              className="inline-flex items-center text-base font-semibold leading-tight text-primary-600 hover:underline dark:text-primary-500"
            >
              {/* Visit the website */}
              {/* <svg
                aria-hidden="true"
                className="ml-1.5 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg> */}
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-5xl lg:mt-16">
          <Image
            className="w-full rounded-lg shadow-lg"
            src={DS}
            alt="Content image"
            width={150}
            height={50}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                Overview
              </h3>
              <p className="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                In the ever-evolving landscape of education, efficient
                management systems are critical to streamline operations and
                foster seamless communication among stakeholders. Our School
                Management System empowers administrators, teachers, parents,
                and students with a comprehensive platform that centralizes
                academic, administrative, and financial processes. Designed with
                user-centric functionality, this system ensures smooth
                coordination across all facets of school operations.
              </p>
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
              <li className="flex items-center gap-2.5">
                <svg
                  className="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Manage Academics
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <svg
                  className="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Manage Employees
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <svg
                  className="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Manage Student
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <svg
                  className="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Manage Attendance
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <svg
                  className="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Manage Parents
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <svg
                  className="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                Manage Class Information
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <svg
                  className="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Manage Subject
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <svg
                  className="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Manage Exams
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg
                  className="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Student Scores
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <svg
                  className="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Manage Collage Fee
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg
                  className="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Manage Expense
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg
                  className="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Create Expense Category
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg
                  className="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                Manage Hostel Information
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg
                  className="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Manage Transportation
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg
                  className="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Manage System Settings
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <svg
                  className="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Manage Generate Reports
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <svg
                  className="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Manage Role Managements
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                Background
              </h3>
              <p className="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                The traditional methods of managing schools often involve
                fragmented processes, manual data handling, and significant
                administrative overhead. These inefficiencies can hinder the
                academic experience and operational performance. Recognizing
                this gap, we envisioned a solution that integrates every aspect
                of school management into one robust platform. From managing
                academics, exams, and class information to handling fees,
                transport, and hostels, our system offers unparalleled control
                for administrators while providing tailored access for teachers,
                students, and parents.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="border-b-2 border-gray-300 pb-2 text-2xl font-extrabold text-gray-900 dark:text-white">
                The challenge
              </h3>
              <p className="mt-4 text-lg font-normal leading-relaxed text-gray-500 dark:text-gray-400">
                Creating a unified system that caters to the diverse needs of
                multiple stakeholders was no small task. The primary challenges
                included:
              </p>
              <ul className="mt-4 list-inside list-decimal space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <span className="font-semibold">
                    Centralizing Complex Processes:
                  </span>{' '}
                  Designing a structure to seamlessly manage academic,
                  financial, and operational data without overwhelming users.
                </li>
                <li>
                  <span className="font-semibold">
                    Multi-User Functionality:
                  </span>{' '}
                  Developing customized interfaces for administrators, teachers,
                  students, and parents to ensure efficiency and ease of use.
                </li>
                <li>
                  <span className="font-semibold">Real-Time Data Access:</span>{' '}
                  Ensuring that critical information—like attendance, student
                  scores, and payment history—is accessible instantly across
                  user categories.
                </li>
                <li>
                  <span className="font-semibold">Scalability:</span> Building a
                  platform capable of adapting to the needs of various schools,
                  regardless of size or structure.
                </li>
              </ul>
              <p className="mt-6 text-lg font-normal text-gray-500 dark:text-gray-400">
                Through meticulous planning and innovation, our School
                Management System addresses these challenges and stands as a
                testament to modern educational technology, transforming how
                schools operate and communicate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
