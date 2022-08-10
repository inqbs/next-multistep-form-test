import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import FormHeader from '../../components/FormHeader'
import UnderlineInput from '../../components/UnderlineInput'
import { Form } from '../../types/FormType'

const MultiFormFirst: NextPage = () => {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<Form>()

  const onSubmit = () => {
    void router.push('/multi-form/step-2')
  }

  return (
    <div className='w-6/12 mx-auto'>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form className="shadow m-4" onSubmit={handleSubmit(onSubmit)}>
        <FormHeader
          backgroundColor={['from-emerald-500', 'to-teal-500']}
          title='Album Registeration Form'
        />

        <fieldset className='block w-full mb-4 p-4'>
          <legend className='text-lg font-bold'>Name</legend>
          <UnderlineInput type="text" {...register('name', { required: true })} placeholder='Name' />
          <p className='text-red-500'>{(errors.name != null) && 'name is required'}</p>
        </fieldset>
        <fieldset className='block w-full mb-4 p-4'>
          <legend className='text-lg font-bold'>Email</legend>
          <UnderlineInput type="email" {...register('email', { required: true })} placeholder='Email' />
          <p className='text-red-500'>{(errors.email != null) && 'email is required'}</p>
        </fieldset>

        <button className='block p-3 w-full text-center text-white font-bold tracking-widest transition uppercase bg-teal-600 hover:bg-teal-500 active:bg-teal-400'>
          NEXT
        </button>
      </form>
    </div>
  )
}

export default MultiFormFirst
