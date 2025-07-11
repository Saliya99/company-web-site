import React from 'react'

import Photoshop from '../images/Photoshop.webp'
import Ai from '../images/Ai.webp'
import figma from '../images/figma.webp'
import Coreldraw from '../images/Coreldraw.webp'
import canva from '../images/canva.webp'
import Sketch from '../images/Sketch.webp'
import Image from 'next/image'

export default function GSlider() {
  return (
    <aside
      aria-label="Related articles"
      className="bg-white py-8 antialiased dark:bg-gray-900 lg:py-16"
    >
      <div className="mx-auto max-w-screen-xl px-4">
        <h1 className="mx-auto mb-8 max-w-2xl text-center text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
          Technologies We Use
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <article>
            <a href="#">
              <Image
                className="mb-5 w-full max-w-full rounded-lg"
                alt=""
                src={Photoshop}
                style={{ width: '704px', height: '222px' }}
              />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <a href="#">
                The industry-standard tool for photo editing and digital
                artwork, ensuring stunning visuals with every project.
              </a>
            </h2>
          </article>
          <article>
            <a href="#">
              <Image
                className="mb-5 w-full max-w-full rounded-lg"
                alt=""
                src={Ai}
                style={{ width: '704px', height: '222px' }}
              />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <a href="#">
                Perfect for creating vector graphics, logos, and illustrations
                that scale beautifully.
              </a>
            </h2>
          </article>
          <article>
            <a href="#">
              <Image
                className="mb-5 w-full max-w-full rounded-lg"
                alt=""
                src={figma}
                style={{ width: '704px', height: '222px' }}
              />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <a href="#">
                Collaborative design tool for crafting modern UI/UX designs and
                prototypes with precision
              </a>
            </h2>
          </article>
          <article>
            <a href="#">
              <Image
                className="mb-5 w-full max-w-full rounded-lg"
                alt=""
                src={Coreldraw}
                style={{ width: '704px', height: '222px' }}
              />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <a href="#">
                A versatile tool for creating detailed vector illustrations and
                professional layouts
              </a>
            </h2>
          </article>
          <article>
            <a href="#">
              <Image
                className="mb-5 w-full max-w-full rounded-lg"
                alt=""
                src={canva}
                style={{ width: '704px', height: '222px' }}
              />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <a href="#">
                Quick and efficient for crafting beautiful designs, social media
                graphics, and marketing materials
              </a>
            </h2>
          </article>
          <article>
            <a href="#">
              <Image
                className="mb-5 w-full max-w-full rounded-lg"
                alt=""
                src={Sketch}
                style={{ width: '704px', height: '222px' }}
              />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <a href="#">
                Specialized in creating modern web and mobile UI/UX designs with
                efficiency
              </a>
            </h2>
          </article>
        </div>
      </div>
    </aside>
  )
}
