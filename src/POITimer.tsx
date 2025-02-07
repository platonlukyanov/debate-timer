import { useCallback, useContext, useEffect, useState } from "react"
import useTimer from "./hooks/useTimer";
import { addLeadingZeros, minutes, seconds } from "./utils";
import { GlobalTimerPausedContext } from "./context";

const POI_TIME = 15;

function POITimer() {
	const isGlobalTimerPaused = useContext(GlobalTimerPausedContext)
	const [timer, setTimer] = useState(0);
	const { reset, start: startTimer, pause, paused } = useTimer(timer, setTimer)
	
	const start = useCallback(() => {
		if (isGlobalTimerPaused) return;
		startTimer();
	}, [isGlobalTimerPaused, startTimer])

	useEffect(() => {
		if (isGlobalTimerPaused) {
			pause();
			return;
		}
		if (!isGlobalTimerPaused && paused && timer != 0) {
			start();
		}
	}, [isGlobalTimerPaused, pause, paused, start, timer])

	useEffect(() => {
		if (POI_TIME - timer <= 0) {
			reset();
		}
	}, [timer, reset])

	return (
		<div className="flex justify-center items-center gap-4">
			<button className="p-6 min-w-36 text-4xl text-slate-900 border-solid border-2 border-slate-900 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed" disabled={isGlobalTimerPaused} onClick={start}>
				{(paused && timer == 0) ? 
					'POI' 
					: `${addLeadingZeros(minutes(POI_TIME - timer))}:${addLeadingZeros(seconds(POI_TIME - timer))}`}
			</button>
		</div>
	)
}

export default POITimer