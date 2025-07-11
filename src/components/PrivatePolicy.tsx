import React from 'react'

export const PrivatePolicy: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            How can we help you?
          </h2>
          <p className="mb-8 font-light text-gray-500 dark:text-gray-500 sm:text-xl">
            Here are a few of the questions we get the most. If you don t see
            what you has on your mind, reach out to us anytime on phone, chat,
            or email.
          </p>
          <label
            htmlFor="email-address-icon"
            className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your Email
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-6 w-6 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
            </div>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Repeatable Card Section */}
          <div className="rounded p-4 shadow dark:bg-gray-800">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
              <svg
                className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold dark:text-white">
              Refund Policy
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Returns are accepted within 14 days for unused items in original
              packaging. Refunds exclude shipping costs. Non-returnable items
              include gift cards and custom products. Contact us for damaged
              items.
            </p>
            {/* <a
              href="#"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              See all
            </a> */}
          </div>

          <div className="rounded p-4 shadow dark:bg-gray-800">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
            <svg
              className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="5" width="14" height="10" rx="2" />
            </svg>
                        </div>
            <h3 className="mb-4 text-xl font-bold dark:text-white">
              Privacy Policy
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Amazoft.com respects your privacy. We collect personal and payment
              info to process orders and improve your experience. Cookies are
              used, and we ensure data security. For inquiries, contact us
              through our website.
            </p>
            {/* <a
              href="#"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              See all
            </a> */}
          </div>

          <div className="rounded p-4 shadow dark:bg-gray-800">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
            <svg
              className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="8" />
            </svg>

            </div>
            <h3 className="mb-4 text-xl font-bold dark:text-white">Terms</h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              By using Amazoft.com, you agree to our terms. You must be 16 or
              older, provide accurate information, and keep your account details
              confidential.
            </p>
            {/* <a
              href="#"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              See all
            </a> */}
          </div>

          <div className="rounded p-4 shadow dark:bg-gray-800">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
            <svg
              className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 4l6 10H4z" />
            </svg>

            </div>
            <h3 className="mb-4 text-xl font-bold dark:text-white">
              Conditions
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Prices and product details may change. We reserve the right to
              cancel orders, and payments are securely processed. Refer to our
              Returns and Refund Policy for more details.
            </p>
            {/* <a
              href="#"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              See all
            </a> */}
          </div>
        </div>
      </div>
    </section>
  )
}
