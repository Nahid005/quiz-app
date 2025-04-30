export default function FinishScreen({points, avaragePoints, dispatch}) {

    const percentage = points / avaragePoints * 100;

    return (
        <>
            <p className="result">Your scored <strong>{points}</strong> out of {avaragePoints} ({Math.ceil(percentage)}%)</p>
            <button onClick={() => dispatch({type:'reset'})} className="btn btn-ui">Reset Quiz</button>
        </>
    )
}