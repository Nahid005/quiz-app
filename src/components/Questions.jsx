import Question from "./Question";

export default function Questions({questions}) {
    return(
        <>
            {
                questions.map(question => <Question key={question.question} question={question} />)
            }
        </>
    )
}