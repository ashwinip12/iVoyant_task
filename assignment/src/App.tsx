
import './App.css'
import { Count } from './Count1.tsx/count'
import { Window } from './WindowSize/window1'
import { Location } from './Location/location'
import { MyForm } from './Form/form1'
import { Toggle } from './Toggle/useToggle'
import { Fetch } from './Fetching/useFetch'
function App() {
  

  return (
    <>
    
      <Count/>
      <Window/>
      <Location/>
      <MyForm/>
      <div>
      <Toggle/>
      </div>
      <Fetch/>
     
    </>
  )
}

export default App
