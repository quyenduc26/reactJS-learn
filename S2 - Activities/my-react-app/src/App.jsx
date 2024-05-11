import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const MainGoal = ({ description }) => {
    return (
      <>
        {description && <p>{description}</p>}
      </>
    );
  };
  
  
  return (
    <MainGoal description="Be as good as Ronan on ReactJS" />
  )
}

export default App
