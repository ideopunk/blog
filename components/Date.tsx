export default function DateComponent({ dateString }: { dateString: string }) {
	const parsedDate = new Date(dateString);
	const date = `${parsedDate.toLocaleDateString(["en-CA"], {
		month: "short",
		day: "numeric",
		year: "numeric",
	})}`;

	return (
		<time className="text-sm md:text-base font-light" dateTime={dateString}>
			{date}
		</time>
	);
}
