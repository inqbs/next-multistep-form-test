import { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import FormHeader from '../../components/FormHeader'

const MultiFormIndex: NextPage = () => {
  const [agree, setAgree] = useState(false)

  return (
    <div className='w-6/12 mx-auto'>
      <form className="shadow m-4">
        <FormHeader
          backgroundColor={['from-emerald-500', 'to-teal-500']}
          title='Album Registeration Form'
        />

        <section className='block w-full p-4'>
          <h2 className='text-lg font-bold mb-4'>Notice</h2>
          <div className='bg-gray-100 text-gray-700 p-4'>
            <p className='text-justify mb-3'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa nam temporibus enim officia dolor commodi quas, labore ipsam possimus quia quod perferendis quasi, veniam fuga corporis obcaecati facere natus expedita?
            </p>
            <p className='text-justify mb-3'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi officia tempore magnam consequatur in blanditiis unde dolores explicabo saepe atque ad maxime deleniti impedit eius dignissimos voluptas, reprehenderit optio eos?
            </p>
            <p className='text-justify mb-3'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ut reiciendis deserunt explicabo numquam, iusto repellat quasi, aperiam enim ab eos distinctio dolore corporis adipisci consectetur corrupti laborum mollitia dignissimos.
            </p>
          </div>
        </section>

        <section className='block w-full mb-4 p-4'>
          <input id='agree-checkbox' type="checkbox" onClick={() => setAgree(state => !state)} />
          <label htmlFor="agree-checkbox" className='ml-2 text-sm font-bold'>I have confirmed that</label>
        </section>

        <Link href='/multi-form/step-1'>
          <a className={'block p-3 w-full text-center text-white font-bold tracking-widest transition uppercase ' + (!agree ? 'pointer-events-none bg-gray-200' : 'bg-teal-600 hover:bg-teal-500 active:bg-teal-400')}>
            NEXT
          </a>
        </Link>
      </form>
    </div>
  )
}

export default MultiFormIndex
