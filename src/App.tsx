import './App.css'
import MobileSteps from './components/MobileSteps'
import PersonCard from './components/PersonCard'
import PlanCard from './components/PlanCard'

function App() {

  return (
    <div className='h-screen py-8 px-4 font-ubun bg-blue-300 bg-mobile bg-contain bg-center-top bg-no-repeat
    md:bg-desktop'>
      <MobileSteps />
      {/* <PersonCard /> */}
      <PlanCard />
    </div>
  )
}


export default App
