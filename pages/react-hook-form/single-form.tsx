import { NextPage } from 'next'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import FormHeader from '../../components/FormHeader'
import UnderlineInput from '../../components/UnderlineInput'

import { FormType } from '../../types/FormType'

const SingleForm: NextPage = () => {
  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>()
  const onSubmit: SubmitHandler<Form> = data => console.dir(data)

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
        <FormHeader backgroundColor={['from-sky-500', 'to-indigo-500']} title="Album Registeration Form" />

        <fieldset className="block w-full mb-4 p-4">
          <legend className="text-lg font-bold">Artist</legend>
          <UnderlineInput type="text" {...register('name', { required: true })} placeholder="Name" />
          <p className="text-red-500">{errors.name != null && 'name is required'}</p>
          <UnderlineInput type="email" {...register('email', { required: true })} placeholder="Email" />
          <p className="text-red-500">{errors.email != null && 'email is required'}</p>
        </fieldset>

        <fieldset className="block w-full mb-4 p-4">
          <legend className="text-lg font-bold">Album</legend>
          <UnderlineInput type="text" {...register('vid', { required: true })} placeholder="Video link" />
          <p className="text-red-500">{errors.vid != null && 'video id is required'}</p>
          <UnderlineInput type="datetime" {...register('date', { required: true })} placeholder="Release date" />
          <p className="text-red-500">{errors.date != null && 'date is required'}</p>
        </fieldset>

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

        <button
          className="p-3 w-full text-white font-bold tracking-widest bg-blue-600 hover:bg-blue-500 active:bg-blue-400 transition uppercase"
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  )
}

export default SingleForm
