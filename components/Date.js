import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
	console.log("datestring");
	console.log(dateString);
	const date = parseISO(dateString);
	return (
		<time dateTime={dateString}>
			{format(date, "LLLL d, yyyy")}

			<style jsx>{`
				time {
					font-size: 0.75rem;
				}
			`}</style>
		</time>
	);
}
