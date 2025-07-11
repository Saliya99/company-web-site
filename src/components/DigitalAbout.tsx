import React from 'react'
import Image from 'next/image'
import dashboard from '../images/G7.webp'

export const DigitalAbout = () => {
  return (
    <section className="bg-white px-4 py-16 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-12 lg:flex-row">
      
        <div className="w-full flex-shrink-0 lg:w-1/2">
          <Image
            className="w-full rounded-lg shadow-lg"
            src={dashboard}
            alt="dashboard image"
          />
        </div>

       
        <div className="text-center lg:w-1/2 lg:text-left">
          <h1
            className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl"
            style={{
              marginBottom: '1rem',
              fontSize: '2rem',
              fontWeight: '800',
              color: 'white',
              textAlign: 'center',
              lineHeight: '1.5',
            }}
          >
            Enjoy Full-Service Digital Marketing Expertise
          </h1>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            At Amazoft, we offer comprehensive digital marketing solutions that
            can elevate your brand, enhance your online presence, and drive
            measurable results. Our expert team specializes in crafting tailored
            strategies across all aspects of digital marketing, ensuring that
            your business reaches its target audience effectively and
            efficiently.
          </p>

          <div className="mb-6">
            <h3
              className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white"
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '1rem',
              }}
            >
              Our Services Include:
            </h3>
            <ul
              className="list-inside list-disc font-light text-gray-500 dark:text-gray-400"
              style={{
                listStyleType: 'disc',
                paddingLeft: '1.5rem',
                color: 'white',
              }}
            >
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>SEO (Search Engine Optimization):</strong> Optimize your
                website to rank higher in search results, increase organic
                traffic, and improve user experience.
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>PPC Advertising:</strong> Create targeted pay-per-click
                campaigns that drive traffic to your site, increase conversions,
                and deliver a high return on investment.
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>Social Media Marketing:</strong> Build and maintain a
                strong social media presence across platforms like Facebook,
                Instagram, LinkedIn, and Twitter.
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>Content Marketing:</strong> Craft valuable, engaging,
                and shareable content that attracts and nurtures your audience.
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>Email Marketing:</strong> Design effective email
                campaigns that nurture leads, promote products, and increase
                customer retention.
              </li>
              <li>
                <strong>Web Design & Development:</strong> Create visually
                stunning, responsive websites optimized for performance and user
                experience.
              </li>
            </ul>
          </div>

          {/* Why Choose Us Section */}

          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Start growing your online presence today with our full-service
            digital marketing expertise. Let us help you achieve the digital
            success your business deserves!
          </p>

          <a
            href="/contact"
            className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Contact Now
            <svg
              className="-mr-1 ml-2 h-5 w-5"
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
        </div>
      </div>
    </section>
  )
}
