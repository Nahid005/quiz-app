export default function Options({question, dispatch, answer}) {

    const hasAnswred = answer !== null

    return (
        <div className="options">
            {
                question.options.map((option, index) => 
                <button 
                    key={index} 
                    onClick={() => dispatch({type: "newAnswer", payload: index})}
                    disabled={hasAnswred}
                    className={`btn btn-option ${index === answer ? 'answer' : ''} ${hasAnswred ? index === question.correctOption ? 'correct' : 'wrong': '' }`}>{option}
                </button>)
            }
        </div>
    )
}