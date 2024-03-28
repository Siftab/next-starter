import React from 'react'
const getTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  if (!res.ok) {
    throw new Error('faild to fetch todos')
  }
  return res.json()
}

const page = async () => {
  const ToDos = await getTodos()
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>Todos{ToDos.length}</h1>
        <ul className='mt-6 flex list-disc flex-col gap-3'>
          {ToDos.slice(0, 10).map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default page
