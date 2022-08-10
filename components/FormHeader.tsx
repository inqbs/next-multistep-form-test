import { FC } from 'react'

type Props = {
  theme: string[]
  title: string
}

const FormHeader: FC<Props> = ({ theme, title }) => {
  return (
    <section className={`pt-8 pb-6 px-4 mb-6 bg-gradient-to-r from-${theme[0]}-500 to-${theme[1]}-500`}>
      <h2 className='font-bold text-4xl text-white'>{title}</h2>
    </section>
  )
}

export default FormHeader
