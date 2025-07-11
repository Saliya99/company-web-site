import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '@/assets/images/logo.webp'

const Footer = function () {
  return (
    <footer className="bg-gray-50 pt-16 dark:bg-gray-800">
      <div className="lg:-10 mx-auto max-w-screen-xl p-4 py-6 md:p-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" className="-m-1.5 flex items-center p-1.5">
              <span className="sr-only">Amazoft</span>
              <Image
                alt="Logo"
                src={logo}
                width={70}
                height={40}
                className="h-auto w-[300px]"
              />
            </Link>
            <p className="my-4 font-light text-gray-500 dark:text-gray-400">
              Here at Amazoft we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
            <ul className="mt-5 flex space-x-6">
              <li>
                <Link
                  href="https://www.facebook.com/amazoft.sl"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/amazoft_it/"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <Link
                  href="https://www.linkedin.com/company/amazoft9954/"
                  className="text-black hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M4.98 3.5C4.98 3.5 4.98 3.5 4.98 3.5C4.98 3.5 4.98 3.5 4.98 3.5C4.98 3.5 4.98 3.5 4.98 3.5C4.98 3.5 4.98 3.5 4.98 3.5zM4.98 3.5C4.98 3.5 4.98 3.5 4.98 3.5zM1.5 0C.67 0 0 0.67 0 1.5v21c0 .83.67 1.5 1.5 1.5h21c.83 0 1.5-.67 1.5-1.5V1.5C24 .67 23.33 0 22.5 0h-21zM7.3 20.7H4.7v-12h2.6v12zm-1.3-13.5c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6 1.6.7 1.6 1.6-.7 1.6-1.6 1.6zm12.3 13.5h-2.6v-6.3c0-1.5-.6-2.7-1.9-2.7s-2 1.2-2 2.7v6.3h-2.6v-12h2.6v1.6h.1c.6-.9 1.6-1.6 3.1-1.6 2.3 0 4.1 1.7 4.1 4.1v7.9z" />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href="https://youtu.be/B86LwRFOOfM?si=TIxysxlbYqsOZN2D"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M23.498 6.186a2.935 2.935 0 00-2.064-2.082C19.346 3.5 12 3.5 12 3.5s-7.346 0-9.434.604A2.935 2.935 0 00.502 6.186 30.21 30.21 0 000 12c0 1.993.169 3.977.502 5.814a2.935 2.935 0 002.064 2.082C4.654 20.5 12 20.5 12 20.5s7.346 0 9.434-.604a2.935 2.935 0 002.064-2.082A30.21 30.21 0 0024 12a30.21 30.21 0 00-.502-5.814zM10.04 15.564V8.96l5.627 3.252-5.627 3.252z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:mx-auto">
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:mx-auto">
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Products
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <Link
                  href="/products/smart-retailer"
                  className="hover:underline"
                >
                  Smart Retailer
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/products/smart-salesman/"
                  className="hover:underline"
                >
                  Smart Salesman
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/products/digital-school/"
                  className="hover:underline"
                >
                  Digital School
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:mx-auto">
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Services
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <Link
                  href="/services/web-development/"
                  className="hover:underline"
                >
                  Web Development
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/services/graphic-design"
                  className="hover:underline"
                >
                  Web & Graphic Design
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/services/digital-marketing/"
                  className="hover:underline"
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:mx-auto">
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <Link href="/policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/terms" className="hover:underline">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()}{' '}
          <Link href="/" className="mr-4 hover:underline">
            Amazoft (Pvt) Ltd.
          </Link>
          All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export { Footer }
