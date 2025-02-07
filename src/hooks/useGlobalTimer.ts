import { useAtom } from "jotai";
import { timerAtom } from "../atoms/timer"
import useTimer from "./useTimer";

export default function useGlobalTimer() {
	const [timer, setTimer] = useAtom(timerAtom);
	return useTimer(timer, setTimer);
}