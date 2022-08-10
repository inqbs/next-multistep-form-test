import { useState } from 'react'
import dayjs from 'dayjs'
import { Form, FormFirstPage, FormSecondPage, FormThirdPage } from '../types/FormType'

export const useMultiForm = () => {
  const [form, setForm] = useState<Form>()

  const setFirstPage: (arg: FormFirstPage) => void = ({ name, email }) => {
    setForm(org => ({ ...(org ?? {}), name, email }))
  }
  const setSecondPage: (arg: FormSecondPage) => void = ({ vid, date }) => {
    setForm(org => ({ ...org, vid, date: dayjs(date) }))
  }
  const setThirdPage: (arg: FormThirdPage) => void = ({ list }) => {
    setForm(org => ({ ...org, list }))
  }
  const resetAll: () => void = () => {
    setForm({
      name: '',
      email: '',
      vid: '',
      date: dayjs(),
      list: []
    })
  }

  return {
    form,
    setFirstPage,
    setSecondPage,
    setThirdPage,
    resetAll
  }
}
