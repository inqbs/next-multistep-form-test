import { FC } from 'react'

type Props = {
  backgroundColor: string[]
  title: string
}

const FormHeader: FC<Props> = ({ backgroundColor, title }) => {
  return (
    <section className={`pt-8 pb-6 px-4 mb-6 ${backgroundColor.length > 1 ? 'bg-gradient-to-r' : ''} ${backgroundColor.join(' ')}`}>
      <h2 className='font-bold text-4xl text-white'>{title}</h2>
    </section>
  )
}

export default FormHeader
