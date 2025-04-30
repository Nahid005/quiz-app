export default function Progress({numOfQuestions, index, points, avaragePoints, answer}) {
    
    return (
        <header className="progress">
            <progress max={numOfQuestions} value={index}></progress>

            <p>Question <strong>{index}</strong> / {numOfQuestions} </p>
            <p><strong>{points}</strong> / {avaragePoints}</p>
        </header>
    )
}