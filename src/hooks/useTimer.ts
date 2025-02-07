import { useRef, useState } from "react";

export default function useTimer(timer: number, setTimer: ((newTimer: number | ((prev: number) => number)) => void)) {
	const [paused, setPaused] = useState(true);
	const intervalRef = useRef<number | null>(null);
	
	const pause = () => {
		if (!intervalRef.current) {
			console.error("No timer to pause")
			return;
		}
		clearInterval(intervalRef.current);
		setPaused(true)
	}

	const start = () => {
		if (intervalRef.current) {
			pause();
		}
		const interval = setInterval(() => {
			setTimer(prev => prev + 1)
		}, 1000)
		intervalRef.current = interval;
		setPaused(false)
	}

	const reset = () => {
		pause();
		setTimer(0);
	}

	return { timer, start, pause, reset, paused };
}

