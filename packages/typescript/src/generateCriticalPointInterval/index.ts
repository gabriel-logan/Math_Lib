import randomNumberBetween from "../randomNumberBetween";

export default function generateCriticalPointInterval(
	min: number,
	max: number,
) {
	return randomNumberBetween(min, max);
}
