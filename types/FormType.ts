import { Dayjs } from 'dayjs'

type Song = {
  title: string
  artist: string
  source?: string
}

export type FormFirstPage = {
  name: string
  email: string
}
export type FormSecondPage = {
  vid: string
  date: Dayjs
}
export type FormThirdPage = {
  list: Song[]
}

export type Form = FormFirstPage & FormSecondPage & FormThirdPage
