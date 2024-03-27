import NavLinks from '@/app/Components/UI/NavLinks'
import Link from 'next/link'
import React from 'react'
import ContactButton from '../UI/ContactButton'

const Header = () => {
  return (
    <header>
      <nav className=' bg-slate-500 p-6'>
        <ul className=' container flex gap-4'>
          <li>
            <NavLinks href='/'>home</NavLinks>
          </li>
          <li>
            <NavLinks href='/about'>about</NavLinks>
          </li>
          <li>
            <ContactButton />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
