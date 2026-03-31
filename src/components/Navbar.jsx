'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import ahavatOlamLogo from "../assets/ahavat_olam_logo_transparent.png"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-black fixed w-full z-50">
      <nav aria-label="Global" className=" mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/home" className="-m-1.5 p-1.5">
            <img
              alt=""
              src={ahavatOlamLogo}
              className="logo"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 lg:pr-12">
          <a href="#hero" className="inter-bold text-sm/6 font-semibold text-white hover:scale-105 transition">
            Home
          </a>
          <a href="#products" className="inter-bold text-sm/6 font-semibold text-white hover:scale-105 transition">
            Products
          </a>
          <a href="#invest" className="text-sm/6 font-semibold text-white hover:scale-105 transition">
            Invest
          </a>
          <a href="#about" className="text-sm/6 font-semibold text-white hover:scale-105 transition">
            About
          </a>
          <a href="#contact" className="text-sm/6 font-semibold text-white hover:scale-105 transition">
            Contact
          </a>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Ahavat Olam</span>
              <img
                alt=""
                src={ahavatOlamLogo}
                className="logo"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/20">
              <div className="space-y-2 py-6">
                {
                  [
                    {name: "Home", href: "#hero"},
                    {name: "Products", href: "#products"},
                    {name: "Invest", href: "#invest"},
                    {name: "About", href: "#about"},
                    {name: "Contact", href: "#contact"}
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-50 hover:scale-105 transition"
                    >
                      {item.name}
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
