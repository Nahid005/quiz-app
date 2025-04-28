import { useEffect, useReducer } from 'react'
import Questions from './components/Questions'
import StartScreen from './components/StartScreen'
import Header from './Header'

function reducer(state, action) {

  switch(action.type) {
    case "start": 
      return {...state, status: action.type}
  }
  
}

function App() {
  const initialState = {
    status: 'ready'
  }
  const [{status}, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    async function getQuestion() {
      const response = await fetch('questions.json');
      const data = await response.json();
      console.log(data);
    }

    getQuestion();
  }, [])

  return (
    <>
      <Header />
      <main>
        {status === "ready" && <StartScreen dispatch={dispatch} />}
        {status === "start" && <Questions />}
      </main>
    </>
  )
}

export default App
