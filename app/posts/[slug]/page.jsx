import React from 'react'

const Page = ({ params }) => {
  console.log(params)
  return (
    <section className='container my-6'>
      <div className='bg-gray-100 p-4'>
        <h1 className=' mt-4 font-serif text-2xl font-bold'>Learn next js </h1>
        <p>zahid hossain sifat</p>
      </div>
    </section>
  )
}

export default Page
