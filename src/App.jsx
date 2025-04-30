import { useEffect, useReducer } from 'react'
import StartScreen from './components/StartScreen'
import Header from './Header'
import Loading from './components/Loading';
import Error from './components/Error';
import Question from './components/Question';
import FinishScreen from './components/FinishScreen';

function reducer(state, action) {

  switch(action.type) {
    case "dataReceived": 
      return {...state, questions: action.payload, status: "ready"};
    case "dataFailed": 
      return {...state, status: 'error' };
    case "start": 
      return {...state, status: 'active', timeRemaining: state.questions.length * 30};
    case "newAnswer": 
      const currentQuestion = state.questions[state.index]
      return {...state, answer: action.payload, points: currentQuestion.correctOption === action.payload ? state.points + currentQuestion.points : state.points};
    case "nextQuestion":
      return {...state, index: state.index + 1, answer: state.answer = null};
    case "finish": 
      return {...state, status: 'finish'};
    case 'reset': 
      return {...state, status: 'ready', questions: state.questions, index: 0, answer: null, points: 0}
    case 'lesstime': 
      return {...state, timeRemaining: state.timeRemaining - 1, status: state.timeRemaining === 0 ? state.status = 'finish' : state.status}

    default:
      throw new Error("Action Unknown")
  }
  
}

function App() {
  const initialState = {
    questions: [],
    status: 'loading',
    index: 0,
    answer: null,
    points: 0,
    timeRemaining: null,
  }
  const [{questions, status, index, answer, points, timeRemaining}, dispatch] = useReducer(reducer, initialState);

  const numOfQuestions = questions.length;
  const avaragePoints = questions.reduce((curr, acc) => {
    return curr + acc.points;
  }, 0)

  useEffect(() => {
    async function getQuestion() {
      try {
        const response = await fetch('https://rose-adelle-46.tiiny.site/questions.json');
        if(!response.ok) {
          throw new Error("Server not response")
        }

        const data = await response.json();
        dispatch({type: "dataReceived", payload: data.questions})

      } catch(error) {
        dispatch({type: "dataFailed"})
      }
    }

    getQuestion();
  }, [])

  return (
    <>
      {/* <Header /> */}
      <main className='main'>
        {status === "loading" && <Loading />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen dispatch={dispatch} numOfQuestions={numOfQuestions}/>}
        {status === "active" && <Question 
          question={questions[index]} 
          dispatch={dispatch} 
          answer={answer} 
          numOfQuestions={numOfQuestions} 
          index={index} 
          points={points}
          avaragePoints={avaragePoints}
          timeRemaining={timeRemaining}
        />}
        {status === "finish" && <FinishScreen  points={points}
          avaragePoints={avaragePoints} dispatch={dispatch} />}
      </main>
    </>
  )
}

export default App
