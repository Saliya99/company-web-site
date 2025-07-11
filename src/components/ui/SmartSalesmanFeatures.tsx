'use client'
import React from 'react'

const SmartSalesmanFeatures = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-20">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            FEATURES OF SMART SALESMAN
          </h2>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-3 xl:gap-8">
          {/* Feature 1 */}
          <div className="rounded bg-white p-6 shadow dark:bg-gray-800">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
              <svg
                className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              01. ITEM MASTER
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              1.1. Add product- Items can be added to the system in the
              following categories which can be edited: Barcode, Item code, item
              description and pricing (bulk wise and individual)
            </p>
            <p className="font-light text-gray-500 dark:text-gray-400">
              1.2. Inventory data can be checked at branches and delivery
              vehicles in real-time.
            </p>
            <p className="font-light text-gray-500 dark:text-gray-400">
              1.3. Ability to obtain various analytical reports for each product
              with route wise
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded bg-white p-6 shadow dark:bg-gray-800">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
              <svg
                className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              02. RETAILER MANAGEMENT
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              2.1. Customer Master
            </p>
            <p className="font-light text-gray-500 dark:text-gray-400">
              2.2. Customer Registration - Customers can register with all the
              details of the business
            </p>
            <p className="font-light text-gray-500 dark:text-gray-400">
              2.3. Customer history - Maintaining records of individual
              customers details in transactions of Purchase, Payment,
              Receivables.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded bg-white p-6 shadow dark:bg-gray-800">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
              <svg
                className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              03. FIELD REPS
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              3.1. Salesman / Sales rep registration- Registration with all the
              details of each salesman identifying the sales targets of each
              salesman separately. Being able to locate sales teams at anytime
              from mobile phone
            </p>
            <p className="font-light text-gray-500 dark:text-gray-400">
              3.2. Performance tracking of Salesforce (e.g. Achievements per
              day, how many outlets visited at a given time)
            </p>
          </div>

          {/* Feature 4 */}
          <div className="rounded bg-white p-6 shadow dark:bg-gray-800">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
              <svg
                className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              04. ROUTE PLANNING
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              4.1. Delivery vehicle registration - Vehicles wise item inventory
            </p>
            <p className="font-light text-gray-500 dark:text-gray-400">
              4.2. Sales network connects with customer location, salesman, and
              delivery vehicle
            </p>
            <p className="font-light text-gray-500 dark:text-gray-400">
              4.3. Route planning- Efficiently planning of delivery routes
              according to the areas where the goods are to be delivered
            </p>
          </div>

          {/* Feature 5 */}
          <div className="rounded bg-white p-6 shadow dark:bg-gray-800">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
              <svg
                className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              05. ORDER TRACKING
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              5.1. Mobile Orders & Credit Notes – Salesmen place orders via a
              digital product menu and upload them in real-time.
            </p>
            <p className="font-light text-gray-500 dark:text-gray-400">
              5.2. Online & Offline Sales Orders – Sales orders can be processed
              with or without an internet connection.
            </p>
            <p className="font-light text-gray-500 dark:text-gray-400">
              5.3. Geo-Tracking Transactions – Captures transaction locations
              for head office analysis.
            </p>
            <p className="font-light text-gray-500 dark:text-gray-400">
              5.4. Sales & Cheque Return Integration – Updates debtor module and
              cheque returns automatically.
            </p>
            <p className="font-light text-gray-500 dark:text-gray-400">
              5.5. Sales Team Time Tracking – Monitors time spent with each
              customer.
            </p>
            <p className="font-light text-gray-500 dark:text-gray-400">
              5.6. Inventory & Expiry Management – Identifies expiring items and
              manages return stock.
            </p>
          </div>

          {/* Feature 7 */}
          <div className="rounded bg-white p-6 shadow dark:bg-gray-800">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
              <svg
                className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              06. SALES INVOICING
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              6.1. Mobile invoices can make on the field. Generate Invoice with
              comprehensive information such as Date, Item, Customer, Sales Rep,
              Quantity, Location, etc...
            </p>
            <p className="font-light text-gray-500 dark:text-gray-400">
              6.2. Auto-generate predefined discounts on the mobile invoice-
              Customer Credit limits and payment outstanding notification while
              invoicing.
            </p>
            <p className="font-light text-gray-500 dark:text-gray-400">
              6.2.1. Capture receipt details
            </p>
            <p className="font-light text-gray-500 dark:text-gray-400">
              6.2.2. Capture receipt with all
              relevant data [Customer information / Amount / Payment mode (Cash,
              Cheque) / Settlement details]
            </p>
          </div>

          <div className="rounded bg-white p-6 shadow dark:bg-gray-800">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
              <svg
                className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              07. PAYMENTS
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              7.1. Invoice History
            </p>
            <p className="font-light text-gray-500 dark:text-gray-400">
              7.2. Received payment
            </p>
            <p className="font-light text-gray-500 dark:text-gray-400">
              7.3. Credit recovery
            </p>
            <p className="font-light text-gray-500 dark:text-gray-400">
              7.4. Debtors and credit limit management
            </p>
            <p className="font-light text-gray-500 dark:text-gray-400">
              7.5 Cheque to be deposited in the bank ( Date Cheque )
            </p>
          </div>

          <div className="rounded bg-white p-6 shadow dark:bg-gray-800">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
              <svg
                className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              08. Operations
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              8.1. Maintaining creditors’ age-wise analysis with user-definable
              age groups.
            </p>
            <p className="font-light text-gray-500 dark:text-gray-400">
              8.2 The Management Reporting System is generated to provide
              accurate and timely information for effective business management
              analysis and forecasting [Ex. Daily Sales Summary report,
              expenses, Free Issue report]
            </p>
            <p className="font-light text-gray-500 dark:text-gray-400">
              8.3. Any other managerial report can be provided with customizing
              according to your requirement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SmartSalesmanFeatures