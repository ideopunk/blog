export const stringToColor = (str: string, saturation = 80, lightness = 85) => {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash);
		hash = hash & hash;
	}
	return `hsl(${hash % 360}, ${saturation}%, ${lightness}%)`;
};
