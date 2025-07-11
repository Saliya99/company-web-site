'use client'
import logo from '../images/logo.webp'
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  AcademicCapIcon,
  Bars3Icon,
  BriefcaseIcon,
  BuildingStorefrontIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
  PuzzlePieceIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'

const products = [
  {
    name: 'Smart Retailer',
    description: 'Comprehensive POS system for retailers',
    href: '/products/smart-retailer',
    icon: BuildingStorefrontIcon,
  },
  {
    name: 'Smart Salesman',
    description: 'Goods distribution platform',
    href: '/products/smart-salesman',
    icon: BriefcaseIcon,
  },
  {
    name: 'Digital School',
    description: 'School management system',
    href: '/products/digital-school',
    icon: AcademicCapIcon,
  },
]

const services = [
  {
    name: 'Web Development',
    description: 'Building responsive, high-performance websites',
    href: '/services/web-development/',
    icon: CodeBracketIcon,
  },
  {
    name: 'Web & Graphic Design',
    description: 'Captivating design for your brand',
    href: '/services/graphic-design/',
    icon: PuzzlePieceIcon,
  },
  {
    name: 'Digital Marketing',
    description: 'Attract right customers for your business',
    href: '/services/digital-marketing/',
    icon: ChatBubbleLeftRightIcon,
  },
]

export default function Header2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gray-800 text-white">
      <nav
        aria-label="Global"
        className="max-w-8xl mx-auto flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Amazoft</span>
            <Image
              alt=""
              src={logo}
              className="h-8 w-auto"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6 text-gray-400" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:mr-8 lg:flex lg:gap-x-12">
          <Popover className="relative">
            {({ close }) => (
              <>
                <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold">
                  Products
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="size-5 flex-none text-gray-400"
                  />
                </PopoverButton>
                <PopoverPanel
                  transition
                  className="data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-gray-800 shadow-lg ring-1 ring-gray-900/5 transition"
                >
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6"
                      >
                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-400 group-hover:bg-white">
                          <item.icon
                            aria-hidden="true"
                            className="size-6 text-gray-600 group-hover:text-primary-600"
                          />
                        </div>
                        <div className="flex-auto">
                          <Link
                            href={item.href}
                            className="block font-semibold text-gray-300 hover:text-gray-200"
                            onClick={() => close()}
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-gray-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50"></div>
                </PopoverPanel>
              </>
            )}
          </Popover>
        </PopoverGroup>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            {({ close }) => (
              <>
                <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold">
                  Services
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="size-5 flex-none text-gray-400"
                  />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-gray-800 shadow-lg ring-1 ring-gray-900/5 transition"
                >
                  <div className="p-4">
                    {services.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6"
                      >
                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-400 group-hover:bg-white">
                          <item.icon
                            aria-hidden="true"
                            className="size-6 text-gray-600 group-hover:text-primary-600"
                          />
                        </div>
                        <div className="flex-auto hover:text-white">
                          <Link
                            href={item.href}
                            className="block font-semibold text-gray-400 hover:text-gray-200"
                            onClick={() => close()}
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50"></div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          <Link href="/blog/" className="text-sm/6 font-semibold text-white">
            Blog
          </Link>
          <Link href="/about/" className="text-sm/6 font-semibold text-white">
            About
          </Link>
          <Link href="/contact/" className="text-sm/6 font-semibold text-white">
            Contact
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="text-sm/6 font-semibold text-primary-600"
          >
            Get Started <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Amazoft</span>
              <Image
                alt=""
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
                width={100}
                height={100}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6 text-gray-400" />
            </button>
          </div>
          <div className="mt-20 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-400">
                    Product
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="group-data-open:rotate-180 size-5 flex-none"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 text-gray-400"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-400">
                    Services
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="group-data-open:rotate-180 size-5 flex-none"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...services].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 text-gray-400"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="/blog/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-400"
                >
                  Blog
                </Link>
                <Link
                  href="/about/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-400"
                >
                  About
                </Link>
                <Link
                  href="/contact/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-400"
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/contact/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-green-400"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
