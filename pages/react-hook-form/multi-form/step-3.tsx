import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import UnderlineInput from '../../../components/UnderlineInput'

import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import { Form } from '../../../types/FormType'
import FormHeader from '../../../components/FormHeader'
import Stepper from '../../../components/Stepper'

const MultiFormThird: NextPage = () => {
  const router = useRouter()
  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>()

  const onSubmit = () => {
    router.push('/react-hook-form/multi-form/done')
  }

  const [songLength, setSongLength] = useState(1)
  const addSong = () => setSongLength(songLength => songLength + 1)
  const removeSong = () => {
    if (songLength > 1) {
      unregister(`song.${songLength - 1}`)
      setSongLength(songLength => Math.max(songLength - 1, 1))
    }
  }

  return (
    <div className="w-6/12 mx-auto">
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form className="shadow m-4" onSubmit={handleSubmit(onSubmit)}>
        <FormHeader backgroundColor={['from-emerald-500', 'to-teal-500']} title="Album Registeration Form" />

        <div className="m-4 p-4">
          <Stepper current={3} steps={4} />
        </div>

        <fieldset className="block w-full mb-4 p-4">
          <legend className="flex justify-between w-full">
            <h3 className="text-lg font-bold">Song List</h3>
            <div className="flex gap-4">
              {songLength > 1 && (
                <button className="block border p-2 hover:bg-slate-50 transition" onClick={removeSong}>
                  <AiOutlineMinus />
                </button>
              )}
              <button className="block border p-2 hover:bg-slate-50 transition" onClick={addSong}>
                <AiOutlinePlus />
              </button>
            </div>
          </legend>
          {Array(songLength)
            .fill('')
            .map((_, idx) => (
              <div key={`song-${idx}`} className="flex justify-between items-center gap-4">
                <span className="inline-block font-bold w-3">{idx + 1}.</span>
                <UnderlineInput
                  type="text"
                  {...register(`song.${idx}.title`, { required: true })}
                  placeholder="Song Title"
                  className="w-[25%]"
                />
                <UnderlineInput
                  type="text"
                  {...register(`song.${idx}.artist`, { required: true })}
                  placeholder="Artist"
                />
              </div>
            ))}
          {Boolean(Array(errors.song)?.some?.(it => it != null) ?? false) && (
            <p className="text-red-500">Song info is required</p>
          )}
        </fieldset>

        <button className="block p-3 w-full text-center text-white font-bold tracking-widest transition uppercase bg-teal-600 hover:bg-teal-500 active:bg-teal-400">
          SUBMIT
        </button>
      </form>
    </div>
  )
}

export default MultiFormThird
