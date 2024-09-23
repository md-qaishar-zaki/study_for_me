import { useState } from "react"

export default function TimeChalenger({ title, TargetTime }) {
    const [ExprTimmer, SetExprTimmer] = useState(false);
    const [StartedTimmer, SetStartedTimmer] = useState(false);

    const startHandel = () => {

        setTimeout(() => {
            SetExprTimmer(true)
        }, TargetTime * 100);

        SetStartedTimmer(true)
    }

    const StopTimmer = () => {

    }
    return (
        <>
            <div className="ChallengesBox">
                <h2>{title}</h2>
                {ExprTimmer && <span>You lost !</span>}
                <p>{TargetTime} Secound{TargetTime > 1 ? 's' : ''}</p>
                <button onClick={startHandel}>
                    {StartedTimmer ? 'Stop' : 'Start'}  Challenge</button>
                <span>Time inactive</span>
            </div>
        </>
    )
}
