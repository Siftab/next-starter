import Link from 'next/link'
import React from 'react'

const layout = ({ children }) => {
  return (
    <section className=' container'>
      <Link href='/about/id'>
        <p>id</p>
      </Link>

      <div className=''>ABou||NAV</div>
      <div> {children}</div>
    </section>
  )
}

export default layout
