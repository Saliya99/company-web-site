import React from 'react'
// import smart from '@/assets/images/Smart.png'
import smart from '@/assets/images/smart2.webp'
import Image from 'next/image'

const SmartFooter = () => {
  return (
    <section className="bg-white antialiased dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="text-center">
          <div>
            <h2 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Ultimate Retail
              <span className="md:block"> Management Solution</span>
            </h2>
            <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl md:mx-auto md:max-w-3xl">
              Streamline your retail operations with Smart Retailer, the
              all-in-one system designed to boost efficiency, simplify
              management, and deliver real-time insights. Perfect for businesses
              of all sizes, it empowers you to optimize sales, manage inventory,
              and enhance customer satisfaction effortlessly.
            </p>
          </div>

          <div className="mx-auto mt-8 flex max-w-sm items-center justify-center gap-4">
            {/* App Store Button */}
            <a
              href="#"
              title=""
              className="inline-flex w-full items-center justify-center rounded-lg bg-gray-900 px-2 py-3 text-left text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 sm:w-auto sm:px-4"
              role="button"
            >
              <svg
                aria-hidden="true"
                className="h-8 w-8 sm:h-10 sm:w-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.5 9.5V13H8V9.5H11.5Z" fill="#FFFFFF" />
                <path d="M11.5 17.5V14H8V17.5H11.5Z" fill="#FFFFFF" />
                <path d="M16 9.5V13H12.5V9.5H16Z" fill="#FFFFFF" />
                <path d="M16 17.5V14H12.5V17.5H16Z" fill="#FFFFFF" />
                <path
                  d="M8 6V3.75C8 2.7835 8.7835 2 9.75 2H14.25C15.2165 2 16 2.7835 16 3.75V6H21.25C21.6642 6 22 6.33579 22 6.75V18.25C22 19.7688 20.7688 21 19.25 21H4.75C3.23122 21 2 19.7688 2 18.25V6.75C2 6.33579 2.33579 6 2.75 6H8ZM9.5 3.75V6H14.5V3.75C14.5 3.61193 14.3881 3.5 14.25 3.5H9.75C9.61193 3.5 9.5 3.61193 9.5 3.75ZM3.5 18.25C3.5 18.9404 4.05964 19.5 4.75 19.5H19.25C19.9404 19.5 20.5 18.9404 20.5 18.25V7.5H3.5V18.25Z"
                  fill="#FFFFFF"
                />
              </svg>
              <div className="ml-2.5">
                <span className="block text-xs font-normal leading-none">
                  Download on
                </span>
                <span className="block text-lg font-bold leading-tight">
                  Microsoft Store
                </span>
              </div>
            </a>
            {/* Google Play Button */}
            <a
              href="#"
              title=""
              className="inline-flex w-full items-center justify-center rounded-lg bg-gray-900 px-2 py-3 text-left text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 sm:w-auto sm:px-4"
              role="button"
            >
              <svg
                aria-hidden="true"
                className="h-8 w-8 sm:h-10 sm:w-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"></path>
              </svg>
              <div className="ml-2.5">
                <span className="block text-xs font-normal leading-none">
                  Download on
                </span>
                <span className="block text-lg font-bold leading-tight">
                  App Store
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="my-8 flex items-center justify-center sm:my-16">
          <Image
            src={smart}
            className="w-50 h-50 object-contain dark:hidden"
            alt=""
          />
          <Image
            src={smart}
            className="w-50 h-50 hidden object-contain dark:block"
            alt=""
          />
        </div>

        <div className="flex items-center justify-center gap-5 sm:mt-8 sm:gap-6"></div>
      </div>
    </section>
  )
}

export default SmartFooter
