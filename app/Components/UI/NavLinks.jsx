'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLinks = ({ href, ...rest }) => {
  const pathname = usePathname()
  const isActive = href === pathname
  console.log(isActive, pathname)
  return (
    <Link
      href={href}
      {...rest}
      className={`${isActive ? ' font-bold text-cyan-500' : ''}`}
    ></Link>
  )
}

export default NavLinks
