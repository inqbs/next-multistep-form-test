import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Controller, useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import UnderlineInput from '../../../components/UnderlineInput'

import 'react-datepicker/dist/react-datepicker.css'
import { Form } from '../../../types/FormType'
import FormHeader from '../../../components/FormHeader'
import Stepper from '../../../components/Stepper'

const MultiFormSecond: NextPage = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Form>()

  const onSubmit = () => {
    router.push('/react-hook-form/multi-form/step-3')
  }

  return (
    <div className="w-6/12 mx-auto">
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form className="shadow m-4" onSubmit={handleSubmit(onSubmit)}>
        <FormHeader backgroundColor={['from-emerald-500', 'to-teal-500']} title="Album Registeration Form" />

        <div className="m-4 p-4">
          <Stepper current={2} steps={4} />
        </div>

        <fieldset className="block w-full mb-4 p-4">
          <legend className="text-lg font-bold">MV Video</legend>
          <UnderlineInput type="text" {...register('vid', { required: true })} placeholder="Video link" />
          <p className="text-red-500">{errors.vid != null && 'video id is required'}</p>
        </fieldset>
        <fieldset className="block w-full mb-4 p-4">
          <legend className="text-lg font-bold">Release Date</legend>
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <DatePicker inline showTimeInput showTimeSelect selected={field.value} onChange={field.onChange} />
            )}
          />
          <p className="text-red-500">{errors.date != null && 'date is required'}</p>
        </fieldset>

        <button className="block p-3 w-full text-center text-white font-bold tracking-widest transition uppercase bg-teal-600 hover:bg-teal-500 active:bg-teal-400">
          NEXT
        </button>
      </form>
    </div>
  )
}

export default MultiFormSecond
