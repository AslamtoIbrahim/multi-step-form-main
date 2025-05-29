import StepButton from './StepButton'

const MobileSteps = () => {
  return (
    <div className='w-full flex items-center justify-center gap-4 md:hidden my-4'>
        <StepButton value={1} />
        <StepButton value={2} />
        <StepButton value={3} />
        <StepButton value={4} />
      </div>
  ) 
}

export default MobileSteps
