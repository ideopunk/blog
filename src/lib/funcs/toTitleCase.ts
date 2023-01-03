export default function toTitleCase(str: string) {
	if (str.length === 2) {
		return str.toUpperCase();
	}
	return str[0].toUpperCase() + str.slice(1);
}
