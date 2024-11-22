import { useCallback, useState } from 'react'
import calculate from './api/complexColculation'
import './App.css'

function App() {
  const [calculation, setCalculation] = useState<number>()
  const [superCalculation, setSuperColculate] = useState<number>()

  const handleCalculationBtnClick = useCallback(async () => {
    const result = await calculate(7)
    setCalculation(result)
  }, [])

  const handleCalculationBtnClick2 = useCallback(async () => {
    const result = await calculate(12)
    setSuperColculate(result)
  }, [])

  const [showTestMassage, setShowTestMessage] = useState(false)

  const handleTestButtonClick = useCallback(() => {
    setShowTestMessage(true)
  }, [])
  
  return (
    <div className='App'>
      <p>{calculation}</p>

      <button onClick={handleCalculationBtnClick}>Make a complex calculation</button>

      <hr style={{ margin: '2em 0' }}/>
      <p>{superCalculation}</p>

      <button onClick={handleCalculationBtnClick2}>Make a complex super calculation</button>

      <hr style={{ margin: '2em 0' }}/>

      <button onClick={handleTestButtonClick}>Test button</button>

      {showTestMassage && <p>Hey, you've cliced me! Yay!</p>}
    </div>
  )
}

export default App
