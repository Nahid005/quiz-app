import { useEffect, useReducer } from 'react'
import Questions from './components/Questions'
import StartScreen from './components/StartScreen'
import Header from './Header'

function reducer(state, action) {

  switch(action.type) {
    case "start": 
      return {...state, status: action.type}
    case "questions": 
      return {...state, questions: action.payload}
  }
  
}

function App() {
  const initialState = {
    questions: [],
    status: 'ready'
  }
  const [{questions, status}, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    async function getQuestion() {
      try {
        const response = await fetch('https://rose-adelle-46.tiiny.site/questions.json');
        if(!response.ok) {
          throw new Error("Server not response")
        }

        const data = await response.json();
        dispatch({type: "questions", payload: data.questions})

      } catch(error) {
        console.log(error)
      }
    }

    getQuestion();
  }, [])

  return (
    <>
      <Header />
      <main>
        {status === "ready" && <StartScreen dispatch={dispatch} />}
        {status === "start" && <Questions questions={questions} />}
      </main>
    </>
  )
}

export default App
