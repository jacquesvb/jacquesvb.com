import React from 'react'
import Link from 'next/link'
import { Atom } from 'lucide-react';
import { Lilita_One } from 'next/font/google';
import ThemeSwitch from './ThemeSwitch';

const font = Lilita_One({ weight: "400", subsets: ['latin'] });

const Navbar = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="grid grid-cols-6 items-center h-16 w-full">
        <Link href="/" className="col-span-2">
          <div className={`${font.className} text-3xl dark:text-amber-50`}>
            Jacques&apos; <span className="text-purple-500">Website</span>
          </div>
        </Link>
        <Link href="/blog" className="col-start-4 col-span-1">
          <div className="flex flex-row">
            <div className="border border-purple-500 rounded-2xl p-1 hover:bg-purple-500 hover:bg-opacity-10 dark:hover:bg-opacity-10 dark:hover:bg-amber-50 w-[32px] mx-3">
              <Atom size={24} />
            </div>
            <div className="mt-1">Blog</div>
          </div>
        </Link>
        <div className="col-start-6 ml-auto">
          <ThemeSwitch />
        </div>
      </div>
    </div>
  )
}

export default Navbar