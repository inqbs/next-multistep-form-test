import dayjs from 'dayjs'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import FormHeader from '../../components/FormHeader'
import Stepper from '../../components/Stepper'
import { Form } from '../../types/FormType'

const MultiFormIndex: NextPage = () => {
  const { getValues, reset } = useForm<Form>()
  const { name, email, vid, date, song } = getValues()

  const router = useRouter()
  const onLeave = () => {
    reset()
    void router.push('/')
  }

  return (
    <div className='w-6/12 mx-auto'>
      <div className="shadow m-4">
        <FormHeader
          backgroundColor={['from-emerald-500', 'to-teal-500']}
          title='Album Register Complete'
        />

        <div className="m-4 p-4">
          <Stepper current={4} steps={4} />
        </div>

        <section className='block w-full p-4'>
          <h2 className='text-lg font-bold mb-4'>Result</h2>
          <dl>
            <dt>name</dt>
            <dd>{name}</dd>
            <dt>email</dt>
            <dd>{email}</dd>
            <dt>vid</dt>
            <dd>{vid}</dd>
            <dt>date</dt>
            <dd>{dayjs(date).format('YYYY-MM-DD HH:mm:ss')}</dd>
            <dt>song</dt>
            <dd><ul>
              {song?.map?.((item, idx) => (
                <li key={`song-${idx}`}>{item.title} / {item.artist}</li>
              ))}
            </ul></dd>
          </dl>
        </section>

        <button className='block p-3 w-full text-center text-white font-bold tracking-widest transition uppercase bg-teal-600 hover:bg-teal-500 active:bg-teal-400' onClick={onLeave}>
          CLOSE
        </button>
      </div>
    </div>
  )
}

export default MultiFormIndex
