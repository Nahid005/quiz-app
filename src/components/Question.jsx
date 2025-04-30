import Options from "./Options";
import Progress from "./Progress";
import Timer from "./Timer";

export default function Question({question, dispatch, answer, numOfQuestions, index, points, avaragePoints, timeRemaining}) {

    return (
        <div className="">
            <Progress numOfQuestions={numOfQuestions} index={index} points={points} avaragePoints={avaragePoints} answer={answer}/>
            <h4>{question.question}</h4>
            <Options question={question} dispatch={dispatch} answer={answer} />
            <Timer dispatch={dispatch} timeRemaining={timeRemaining} />
            {
                index < numOfQuestions - 1 ? <button onClick={() => dispatch({type: "nextQuestion"})} className="btn btn-ui">Next</button> : <button onClick={() => dispatch({type:"finish"})} className="btn btn-ui">Finish</button>
            }
        </div>
    )
}