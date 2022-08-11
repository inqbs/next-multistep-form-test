import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const Home: NextPage = () => {
  const MainRef = useRef(null)
  const SignFormIcon = useRef(null)
  const SecondSectionFirstTitle = useRef(null)
  const SecondSectionSecondTitle = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: MainRef.current,
        start: 'top top',
        end: 'bottom bottom',
        markers: true,
        scrub: true,
        pin: true
      }
    })

    tl.fromTo(SignFormIcon.current, { y: 100, rotationX: '-35', rotationY: '-40', rotationZ: '-38' }, { y: 500, rotationX: '+=35', rotationY: '+=40', rotationZ: '+=38' })
      .fromTo(SecondSectionFirstTitle.current, { opacity: 0 }, { opacity: 1 })
      .fromTo(SecondSectionSecondTitle.current, { opacity: 0 }, { opacity: 1 })
  }, [])

  return (
    <>
      <header className='sticky top-0 w-full py-4 bg-white border-b z-50'>
        <nav className='max-w-6xl mx-auto'>
          <h1 className='text-xl font-bold'>
            Next+TS Multistep Form Tests.
          </h1>
        </nav>
      </header>
      <main ref={MainRef} className='min-h-[200vh]'>
        <section className='h-[95vh] py-8 bg-gradient-to-br from-blue-100 to-blue-50 overflow-hidden relative'>
          <div className='w-full max-w-6xl mx-auto mt-96'>
            <h2 className='text-5xl font-bold mb-8'>Single/Multistep Form Test</h2>
            <div className='flex gap-3'>
              <Link href='/single-form'>
                <a className='px-4 py-2 text-sm font-bold text-blue-700 bg-blue-200 rounded-full'>Test Single Form Now →</a>
              </Link>
              <Link href='/multi-form'>
                <a className='px-4 py-2 text-sm font-bold text-teal-600 bg-teal-200 rounded-full'>Test Multistep Form Now →</a>
              </Link>
            </div>
          </div>
          <div ref={SignFormIcon} className='absolute origin-center bottom-[60%] right-[0%] -translate-x-1/2 translate-y-1/2' >
            <Image src='/sign-form.png' alt='' width='300' height='300' />
          </div>
        </section>

        <section className='h-[95vh] py-8 overflow-hidden relative'>
          <div className='max-w-6xl mx-auto flex flex-col gap-8 items-start'>
            <div ref={SecondSectionFirstTitle} className='w-1/2 mt-24'>
              <h2 className='text-5xl font-bold mb-8'>Lorem ipsum dolor.</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero praesentium recusandae nobis, ducimus fugiat beatae perferendis ipsam corrupti eum adipisci animi quia velit quo doloribus quas accusantium ut labore consectetur.</p>
            </div>
            <div ref={SecondSectionSecondTitle} className='self-end text-right w-1/2 mt-24'>
              <h2 className='text-5xl font-bold mb-8'>Lorem ipsum dolor.</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero praesentium recusandae nobis, ducimus fugiat beatae perferendis ipsam corrupti eum adipisci animi quia velit quo doloribus quas accusantium ut labore consectetur.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
