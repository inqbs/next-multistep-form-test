import { forwardRef } from 'react'

type Props = JSX.IntrinsicElements['input']

const UnderlineInput = forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) =>
    <input ref={ref} {...props} className={`w-full p-2 border-b focus:border-b-blue-600 outline-none transition ${className ?? ''}`} />
)

UnderlineInput.displayName = 'UnderlineInput'

export default UnderlineInput
