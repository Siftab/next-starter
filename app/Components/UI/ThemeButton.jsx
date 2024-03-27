'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { LuSun } from 'react-icons/lu'

const ThemeButton = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) {
    return null
  }
  return (
    <button
      onClick={() => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
      }}
    >
      {theme === 'dark' ? (
        <LuSun className='text-3xl text-yellow-300' />
      ) : (
        <BsFillMoonStarsFill className=' text-3xl' />
      )}
    </button>
  )
}

export default ThemeButton
