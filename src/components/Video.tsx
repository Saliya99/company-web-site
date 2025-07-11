import React from 'react'

export const Video: React.FC = () => {
  return (
    <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
      <header style={{ position: 'relative' }}>
        <div style={{ position: 'relative', paddingBottom: '34.50%' }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/B86LwRFOOfM?autoplay=1&mute=1&loop=1&playlist=B86LwRFOOfM"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: -2,
              filter: 'brightness(0.8) contrast(1.1)',
            }}
          ></iframe>
        </div>

        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1,
            color: 'white',
            padding: '20px',
          }}
        >
          {/* <h4 style={{ margin: 0, fontSize: '2rem', fontWeight: 'bold' }}>
            Your Reliable
          </h4>
          <h2
            style={{ margin: '10px 0', fontSize: '3rem', fontWeight: 'bold' }}
          >
            Building Digital Products & Brands.
          </h2>
          <h3 style={{ margin: 0, fontSize: '1.5rem', fontStyle: 'italic' }}>
            We focus on markets where technology, innovation, and capital can
            unlock long-term value and drive economic growth.
          </h3> */}
          <div className="mb-10 flex justify-center">
            {/* <Button
              color={'primary'}
              href="/contact"
              className="w-35 md:w-1/1 cursor-pointer rounded-lg bg-primary-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <span className="text-lg font-semibold tracking-wide">
                Get Started
              </span>
            </Button> */}
          </div>
        </div>
      </header>
    </div>
  )
}
