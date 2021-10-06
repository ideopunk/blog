import { parseISO, format } from "date-fns";
import utils from "../styles/utils.module.css";

export default function Date({ dateString }) {
	const date = parseISO(dateString);
	return (
		<time className={utils.txtlil} dateTime={dateString}>
			{format(date, "LLLL d, yyyy")}
		</time>
	);
}
