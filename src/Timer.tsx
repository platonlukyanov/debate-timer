import { GlobalTimerPausedContext } from "./context";
import useGlobalTimer from "./hooks/useGlobalTimer"
import POITimer from "./POITimer";
import { addLeadingZeros, minutes, seconds } from "./utils";
import { Play, Square, RotateCcw } from 'lucide-react'

export default function Timer() {
	const { timer, start, pause, reset, paused } = useGlobalTimer();

	return <div>
		<div className="mb-2 md:mb-4">
			<div className={`text-[9rem] md:text-[12rem] h-[15rem] duration-300 ${paused ? " text-slate-400" : "text-slate-900"}`}>
				{addLeadingZeros(minutes(timer))}:{addLeadingZeros(seconds(timer))}
			</div>
		</div>
		<div className="flex justify-center gap-8 mb-12">
			<button onClick={pause}>
				<Square size={64} className="hover:cursor-pointer fill-transparent stroke-red-500 hover:fill-red-500 duration-300"/>
			</button>
			<button onClick={start}>
				<Play size={64} className="hover:cursor-pointer fill-transparent stroke-green-500 hover:fill-green-500 duration-300"/>
			</button>
			<button onClick={reset}>
				<RotateCcw size={64} className="stroke-slate-500 hover:stroke-slate-600 duration-300"/>
			</button>
		</div>
		<GlobalTimerPausedContext.Provider value={paused}>
			<POITimer />
		</GlobalTimerPausedContext.Provider>
</div>
}