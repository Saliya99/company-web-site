import React from 'react'
import Image from 'next/image'
import img12 from '../images/img-12.webp'
import img13 from '../images/jayawardana.webp'
import img14 from '../images/img-14.webp'
import img15 from '../images/img-15.webp'
import img16 from '../images/0C8A5504.webp'
import img17 from '../images/img-17.webp'

export const Team = () => {
  return (
    <section className="bg-white antialiased dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="flex flex-col gap-8 sm:gap-12 xl:flex-row xl:items-start xl:gap-16">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our people make us great
            </h2>
            <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
              Our team at Amazoft is a diverse group of passionate and skilled
              professionals dedicated to delivering innovative software
              solutions. With expertise in various domains of software
              engineering, we collaborate to drive excellence and exceed client
              expectations. Get to know the talented individuals behind our
              success!
            </p>
            <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
              We are a dynamic group of individuals who are passionate about
              what we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>

          <div className="grid w-full shrink-0 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:max-w-3xl">
            {/* Start of Image Cards */}
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                className="object-cover w-full h-[300px] lg:h-[400px] transition-all duration-300 ease-in group-hover:scale-110"
                src={img12}
                alt="Robert Brown"
                width={500}
                height={400}
              />
              <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">
                    Dr. Lionel Samayawardhana
                  </p>
                  <p className="text-base font-medium text-gray-300">
                    Managing Director
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <Image
                className="object-cover w-full h-[300px] lg:h-[400px] transition-all duration-300 ease-in group-hover:scale-110"
                src={img16}
                alt="Bonnie Green"
                width={500}
                height={400}
              />
              <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">
                    Gayan Jayasekara
                  </p>
                  <p className="text-base font-medium text-gray-300">
                    Business Developer
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <Image
                className="object-cover w-full h-[300px] lg:h-[400px] transition-all duration-300 ease-in group-hover:scale-110"
                src={img13}
                alt="Leslie Livingston"
                width={500}
                height={400}
              />
              <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">Avishka Vinod</p>
                  <p className="text-base font-medium text-gray-300">
                    Software Engineer(Frontend)
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <Image
                className="object-cover w-full h-[300px] lg:h-[400px] transition-all duration-300 ease-in group-hover:scale-110"
                src={img14}
                alt="Joseph McFall"
                width={500}
                height={400}
              />
              <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">
                    Ashan Jayarathne
                  </p>
                  <p className="text-base font-medium text-gray-300">
                    Software Engineer(Backend)
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <Image
                className="object-cover w-full h-[300px] lg:h-[400px] transition-all duration-300 ease-in group-hover:scale-110"
                src={img15}
                alt="Samod Neththasighe"
                width={500}
                height={400}
              />
              <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">
                    Samod Neththasighe
                  </p>
                  <p className="text-base font-medium text-gray-300">
                    Software Engineer(BackEnd)
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <Image
                className="object-cover w-full h-[300px] lg:h-[400px] transition-all duration-300 ease-in group-hover:scale-110"
                src={img17}
                alt="Lana Byrd"
                width={500}
                height={300}
              />
              <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">Nimni Yashodha</p>
                  <p className="text-base font-medium text-gray-300">
                    Software Engineer(QA)
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End of Image Cards */}
        </div>
      </div>
    </section>
  )
}
