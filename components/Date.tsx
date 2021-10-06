export default function DateComponent({ dateString }: { dateString: string }) {
	const parsedDate = new Date(dateString);
	const date = `${parsedDate.toLocaleTimeString(["en-CA"], {
		hour: "2-digit",
		minute: "2-digit",
	})} - ${parsedDate.toLocaleDateString(["en-CA"], {
		month: "short",
		day: "numeric",
		year: "numeric",
	})}`;

	return (
		<time className="text-sm" dateTime={dateString}>
			{date}
		</time>
	);
}
