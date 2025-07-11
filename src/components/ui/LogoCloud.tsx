'use client'
import React from 'react'
import cglLogo from '@/assets/images/cgl.webp'
import rclLogo from '@/assets/images/rc.webp'
import umLogo from '@/assets/images/um.webp'
import glmLogo from '@/assets/images/glm.webp'
import Image from 'next/image'

type LogoCloudProps = {
  outline?: boolean
}

const LogoCloud = ({ outline }: LogoCloudProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const outlineClasses = outline
    ? 'outline outline-1 outline-offset-2 outline-primary-400 '
    : ''

  return (
    <section className="bg-white pb-8 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
        <div className="grid grid-cols-4 gap-8 text-gray-500 dark:text-gray-400 sm:gap-12 lg:gap-0">
          <a
            href="https://migrateto-canada.com/index"
            className="flex items-center justify-center"
          >
            <Image src={cglLogo} alt="cgl logo" width={140} height={140} />
          </a>
          <a
            href="https://royal-ceylon.com"
            className="flex items-center justify-center"
          >
            <Image src={rclLogo} alt="cgl logo" width={150} height={150} />
          </a>
          <a href="#" className="flex items-center justify-center">
            <Image
              src={umLogo}
              className="brightness-200"
              alt="cgl logo"
              width={150}
              height={150}
            />
          </a>
          <a
            href="https://www.facebook.com/p/GOAL-Lanka-marketing-100063597967336/"
            className="flex items-center justify-center"
          >
            <Image
              src={glmLogo}
              alt="cgl logo"
              width={200}
              height={150}
              className="brightness-200"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default LogoCloud
