'use client'
import { useTheme } from 'next-themes'
import React from 'react'

const ThemeButton = () => {
  const { theme, setTheme } = useTheme()
  return (
    <button
      onClick={() => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
      }}
    >
      {theme === 'dark' ? 'light' : 'dark'}
    </button>
  )
}

export default ThemeButton
