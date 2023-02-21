export type Song = {
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
  date: Date
}
export type FormThirdPage = {
  song: Song[]
}

export type FormType = FormFirstPage & FormSecondPage & FormThirdPage
