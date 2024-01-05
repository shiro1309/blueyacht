"use client"

import React from 'react'
import { ThemeToggleButton } from '@/components/theme-toggle-button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from 'next/link';
import Image from 'next/image';

const menuItems = [
  { label: "home", href: "/", subMenuItems: ["home 1", "home 2", "home 3"]},
  { label: "about", href: "/about", subMenuItems: ["about 1", "about 2", "about 3"]},
  { label: "blog", href: "/blog", subMenuItems: ["blog 1", "blog 2", "blog 3"]},
  { label: "contact", href: "/contact", subMenuItems: ["contact 1", "contact 2", "contact 3"] },
]

export default function Navbar() {
  return (
    <div className='relative'>

      <div className='fixed w-full top-0 z-50 flex justify-between items-center p-4 bg-white shadow-md'>
        <div className='grid grid-cols-2'>
          <Link href="/">
            <Image src='/icons/logo-nb.svg' alt='logo' width={40} height={40}/>
            
          </Link>
          <Link href="/">
            <h1 className='text-xl font-bold text-blue-500'>test</h1>
          </Link>
        </div>
        <div className=''>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact us
                </NavigationMenuLink>
              </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <ThemeToggleButton />
      </div>
    </div>
  )
}
