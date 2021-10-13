export default function DateComponent({ dateString }: { dateString: string }) {
	const parsedDate = new Date(dateString);
	const date = `${parsedDate.toLocaleDateString(["en-CA"], {
		month: "short",
		day: "numeric",
		year: "numeric",
	})}`;

	return <time className="text-base" dateTime={dateString}>{date}</time>;
}
