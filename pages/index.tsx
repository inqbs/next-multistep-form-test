import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <header className="w-full py-4 bg-white border-b">
        <nav className="max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">
          Next+TS Multistep Form Tests.
        </h1>
        </nav>
      </header>
      <main className='max-w-7xl mx-auto'>
        <section className='py-8'>
          <h2 className="text-5xl font-bold mb-4">Single Form Test</h2>
          <Link href='/single-form'>
            <a className='px-4 py-2 text-sm font-bold text-blue-700 bg-blue-200 rounded-full'>Test Now →</a>
          </Link>
        </section>
        <hr />
        <section className='py-8'>
          <h2 className="text-5xl font-bold mb-4">Multistep Form Test</h2>
          <Link href='/multi-form'>
            <a className='px-4 py-2 text-sm font-bold text-teal-600 bg-teal-200 rounded-full'>Test Now →</a>
          </Link>
        </section>
      </main>
    </>
  )
}

export default Home
