'use client'
import logo from '@/assets/images/logo.webp'
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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-40 w-full border-b border-white/10 bg-black/80 text-white backdrop-blur-xl">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="group flex items-center space-x-3 transition-all duration-300 hover:scale-105"
          >
            <span className="sr-only">Amazoft</span>
            <div className="relative">
              <Image
                alt="Amazoft Logo"
                src={logo}
                className="h-10 w-auto transition-all duration-300 group-hover:brightness-110"
                width={100}
                height={100}
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
            <span className="hidden bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-xl font-bold text-transparent sm:block">
              Amazoft
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="group relative rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              aria-hidden="true"
              className="size-6 text-white transition-colors duration-300 group-hover:text-blue-400"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </button>
        </div>
        <PopoverGroup className="hidden lg:mr-8 lg:flex lg:gap-x-8">
          <Popover className="relative">
            {({ close }) => (
              <>
                <PopoverButton className="group flex items-center gap-x-2 rounded-lg px-4 py-2 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/5 hover:text-white">
                  Products
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="size-4 flex-none text-white/60 transition-all duration-300 group-hover:rotate-180 group-hover:text-blue-400"
                  />
                </PopoverButton>
                <PopoverPanel
                  transition
                  className="data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in absolute -left-8 top-full z-50 mt-4 w-screen max-w-md overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-2xl backdrop-blur-xl transition"
                >
                  <div className="p-6">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-4 rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] hover:bg-white/5"
                      >
                        <div className="flex size-12 flex-none items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 transition-all duration-300 group-hover:from-blue-500/30 group-hover:to-purple-500/30">
                          <item.icon
                            aria-hidden="true"
                            className="size-6 text-blue-400 transition-colors duration-300 group-hover:text-white"
                          />
                        </div>
                        <div className="flex-auto">
                          <Link
                            href={item.href}
                            className="block font-semibold text-white transition-colors duration-300 group-hover:text-blue-400"
                            onClick={() => close()}
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-sm text-white/60 transition-colors duration-300 group-hover:text-white/80">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>
        </PopoverGroup>
        <PopoverGroup className="hidden lg:flex lg:gap-x-8">
          <Popover className="relative">
            {({ close }) => (
              <>
                <PopoverButton className="group flex items-center gap-x-2 rounded-lg px-4 py-2 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/5 hover:text-white">
                  Services
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="size-4 flex-none text-white/60 transition-all duration-300 group-hover:rotate-180 group-hover:text-blue-400"
                  />
                </PopoverButton>
                <PopoverPanel
                  transition
                  className="data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in absolute -left-8 top-full z-50 mt-4 w-screen max-w-md overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-2xl backdrop-blur-xl transition"
                >
                  <div className="p-6">
                    {services.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-4 rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] hover:bg-white/5"
                      >
                        <div className="flex size-12 flex-none items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 transition-all duration-300 group-hover:from-purple-500/30 group-hover:to-pink-500/30">
                          <item.icon
                            aria-hidden="true"
                            className="size-6 text-purple-400 transition-colors duration-300 group-hover:text-white"
                          />
                        </div>
                        <div className="flex-auto">
                          <Link
                            href={item.href}
                            className="block font-semibold text-white transition-colors duration-300 group-hover:text-purple-400"
                            onClick={() => close()}
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-sm text-white/60 transition-colors duration-300 group-hover:text-white/80">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          <Link
            href="/blog/"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/5 hover:text-white"
          >
            Blog
          </Link>
          <Link
            href="/about/"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/5 hover:text-white"
          >
            About
          </Link>
          <Link
            href="/contact/"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/5 hover:text-white"
          >
            Contact
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="group relative rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-purple-500 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <span className="relative z-10">Get Started</span>
            <span
              className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto border-l border-white/10 bg-black/95 px-6 py-6 backdrop-blur-xl sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link href="/" className="group flex items-center space-x-2">
              <span className="sr-only">Amazoft</span>
              <Image
                alt="Amazoft Logo"
                src={logo}
                className="h-8 w-auto"
                width={100}
                height={100}
              />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-lg font-bold text-transparent">
                Amazoft
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="group rounded-xl border border-white/10 bg-white/5 p-2 transition-all duration-300 hover:bg-white/10"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                aria-hidden="true"
                className="size-6 text-white transition-colors duration-300 group-hover:text-red-400"
              />
            </button>
          </div>
          <div className="mt-20 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10">
                    Products
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="group-data-open:rotate-180 size-5 flex-none text-blue-400 transition-transform duration-300"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-3 pl-8 pr-4 text-sm text-white/80 transition-all duration-300 hover:bg-white/5 hover:text-white"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10">
                    Services
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="group-data-open:rotate-180 size-5 flex-none text-purple-400 transition-transform duration-300"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...services].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-3 pl-8 pr-4 text-sm text-white/80 transition-all duration-300 hover:bg-white/5 hover:text-white"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="/blog/"
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-white/90 transition-all duration-300 hover:bg-white/5 hover:text-white"
                >
                  Blog
                </Link>
                <Link
                  href="/about/"
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-white/90 transition-all duration-300 hover:bg-white/5 hover:text-white"
                >
                  About
                </Link>
                <Link
                  href="/contact/"
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-white/90 transition-all duration-300 hover:bg-white/5 hover:text-white"
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/contact/"
                  className="block rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-center text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-purple-500"
                >
                  Get Started →
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
