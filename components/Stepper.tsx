import { FC } from 'react'

type StepState = 'done' | 'now' | 'will'

type Props = {
  current: number
  steps: number

}

const Stepper: FC<Props> = ({ current, steps }) => {
  const getStepState: (idx: number) => StepState = (idx) => {
    switch (true) {
      case idx + 1 < current:
        return 'done'
      case idx + 1 === current:
        return 'now'
      default:
        return 'will'
    }
  }

  return (
    <div className="flex items-center">
      {
        Array(steps).fill(undefined).map((_, idx) => (
          <>
            {idx > 0 && <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${getStepState(idx) === 'will' ? 'border-gray-100' : 'border-teal-600'}`} />}
            <div key={`step-${idx}`} className={`flex items-center relative ${getStepState(idx) === 'will' ? 'text-teal-600' : 'text-white'}`}>
              <div className={`rounded-full transition duration-500 ease-in-out w-4 h-4 ${getStepState(idx) === 'will' ? 'bg-gray-200' : 'bg-teal-600'}`} />
            </div>
          </>
        ))
      }
    </div>
  )
}

export default Stepper
