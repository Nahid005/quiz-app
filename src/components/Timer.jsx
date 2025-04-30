import { useEffect } from "react"

export default function Timer({dispatch, timeRemaining}) {

    const min = Math.floor(timeRemaining / 60);
    const sec = Math.floor(timeRemaining % 60);

    useEffect(() => {
        const id = setInterval(() => {
            dispatch({type:'lesstime'})
        }, 1000)


        return () => clearInterval(id)

    }, [dispatch])


    return <div className="timer">{min}: {sec}</div>
}