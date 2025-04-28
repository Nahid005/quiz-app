export default function StartScreen({dispatch}) {

    return (
        <div className="flex flex-col justify-center gap-4 text-center">
            <h1>Welcome to The Our Quiz App!</h1>
            <h2>X questions to test your React mastery</h2>
            <button onClick={() => dispatch({type: "start"})} className="btn btn-ui">Let's start!</button>
        </div>
    )
}