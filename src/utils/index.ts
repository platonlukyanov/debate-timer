/**
 * Converts raw seconds to whole minutes. E.g 123 = 2, 48 = 0, 78 = 1 
 * @param secs raw seconds (like 123), whole minutes are not excluded
 * @returns whole minutes number 
 */
export function minutes(secs: number) {
	return Math.floor(secs / 60);
}

/**
 * Responsible for MM:XX part of converted raw seconds, where XX is the result and MM minutes
 * @param secs raw seconds (like 123), not divided by minutes or anything
 * @returns rest of seconds after removing the minutes 
 */
export function seconds(secs: number) {
	return secs - minutes(secs) * 60
}

export function addLeadingZeros(initialNumber: number, neededDigits = 2) {
	const numberString = initialNumber.toString();
	if (numberString.length >= neededDigits) {
		return numberString;
	}
	return numberString.padStart(neededDigits, '0');
}