import NavLinks from '@/app/Components/UI/NavLinks'
import Link from 'next/link'
import React from 'react'
import ContactButton from '../UI/ContactButton'
import ThemeButton from '../UI/ThemeButton'

const Header = () => {
  return (
    <header>
      <nav className=' flex  justify-between p-6'>
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
        <ThemeButton></ThemeButton>
      </nav>
    </header>
  )
}

export default Header
