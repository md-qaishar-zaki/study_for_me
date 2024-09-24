import { React, forwardRef, useImperativeHandle, useRef } from 'react'

const resultModal = forwardRef(function ResultModal({ result, targetTime, remainingTime }, ref) {

    const dialog = useRef();
    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })
    return (
        <dialog ref={dialog}>
            {userLost && <h2>You Lost</h2>} 
            {!userLost && <h2>You Score{score}</h2>} 
            <p>The target time was <strong>{targetTime}</strong>Secound.</p>
            <p>you Stopped the timer with{''} <strong>{formattedRemainingTime} secound left.</strong></p>
            <form method='dialog'>
                <button>Close</button>
            </form>
        </dialog>
    )
})
export default resultModal;
