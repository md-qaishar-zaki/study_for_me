import { useRef, useState } from "react"
import ResultModal from "./ResultModal.jsx";

export default function TimeChalenger({ title, TargetTime }) {
    const [ExprTimmer, SetExprTimmer] = useState(false);
    const [StartedTimmer, SetStartedTimmer] = useState(false);
    let timmer = useRef();
    const dialog = useRef();

    const startHandel = () => {

        timmer.current = setTimeout(() => {
            SetExprTimmer(true);
            dialog.current.open();
        }, TargetTime * 100);

        SetStartedTimmer(true)
    }

    const StopTimmer = () => {
        clearTimeout(timmer.current);
        SetStartedTimmer(false)
        SetExprTimmer(false)
    }
    return (
        <>
            <ResultModal ref={dialog} targetTime={TargetTime} result={'Lost'} />
            <div className="ChallengesBox">
                <h2>{title}</h2>
                <p>{TargetTime} Secound{TargetTime > 1 ? 's' : ''}</p>
                <button onClick={StartedTimmer ? StopTimmer : startHandel}>
                    {StartedTimmer ? 'Stop' : 'Start'}  Challenge</button>
                <span>Time inactive </span>
            </div>
        </>
    )
}
