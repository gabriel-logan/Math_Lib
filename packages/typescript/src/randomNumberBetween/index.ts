export default function randomNumberBetween(min: number, max: number) {
	const timestamp = Date.now();
	return min + (timestamp % (max - min + 1));
}
