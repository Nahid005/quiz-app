export default function Question({question}) {

    // const {question, options} = question;

    return (
        <div className="">
            <h3 className="title">{question.question}</h3>
            <ul>
                {
                    question.options.map(option => console.log(option))
                }
            </ul>
        </div>
    )
}