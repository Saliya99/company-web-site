import React from 'react'

export const DigitalSer = () => {
  return (
    <section className="bg-white antialiased dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Let s Check Our Services
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
            Discover our expert digital marketing services designed to boost
            your online presence. From SEO and social media management to
            content marketing and analytics, we help you connect with your
            audience and achieve your business goals.
          </p>
        </div>

        <div className="mt-8 rounded-lg bg-gray-50 p-4 dark:bg-gray-800 sm:p-12 lg:mt-16">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
            {[
              {
                title: 'Social Media Marketing',
                description:
                  'Enhance your brand s presence with our Social Media Marketing services. We create engaging content, manager campaigns, and drive meaningful connections to grow your audience and boost engagement.',
                iconPath:
                  'M12 2C6.48 2 2 6.48 2 12c0 2.7 1.02 5.17 2.69 7.03L2 22l4.97-1.69C8.83 20.98 10.38 21 12 21c5.52 0 10-4.48 10-10S17.52 2 12 2z',
              },
              {
                title: 'Competitor Research',
                description:
                  'Gain a competitive edge with our Competitor Research services. We analyze your competitors strategies, identify market trends, and provide actionable insights to help you stay ahead in the market.',
                iconPath: 'M3 16h2v4H3zm4-2h2v6H7zm4-4h2v10h-2zm4-6h2v16h-2z',
              },
              {
                title: 'Content Marketing',
                description:
                  'Drive engagement and build trust with our Content Marketing services. We craft compelling content that resonates with your audience, enhances brand visibility, and drives measurable results.',
                iconPath:
                  'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
              },
              {
                title: 'Keyword Research',
                description:
                  'Unlock the power of effective SEO with our Keyword Research services. We identify high-value keywords to help you optimize your content, improve search rankings, and attract targeted traffic.',
                iconPath:
                  'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z',
              },
              {
                title: 'Skyrocketing Growth',
                description:
                  'Achieve exponential growth with our Skyrocketing Growth strategies. We focus on innovative digital marketing tactics that drive rapid expansion, increase conversions, and maximize ROI for your business.',
                iconPath: 'M12 2L6 15h4v8h4V15h4L12 2z',
              },
              {
                title: 'PPC Advertising',
                description:
                  'Maximize your ROI with our PPC Advertising services. We create targeted campaigns that drive immediate traffic, increase conversions, and ensure your ads reach the right audience at the right time.',
                iconPath:
                  'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z',
              },

              // Add other features here
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-4 sm:flex-row sm:gap-5"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 lg:h-24 lg:w-24">
                  <svg
                    aria-hidden="true"
                    className="h-10 w-10 text-primary-600 dark:text-primary-500 lg:h-12 lg:w-12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={feature.iconPath}
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
