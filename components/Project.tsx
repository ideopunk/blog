import Image from "next/image";
import ScrollArrow from "./ScrollArrow";
import useWindowSize from "../lib/useWindowSize";

type Lank = { url: string; domain: string };

type Proj = {
	text: string;
	id: number;
	color?: string;
	img?: string;
	comp?: JSX.Element;
	title?: string;
	link?: string;
	bottom?: boolean;
	flip?: boolean;
	dark?: boolean;
};
export default function Project({
	color,
	img,
	comp,
	title,
	text,
	link,
	id,
	bottom,
	flip,
	dark,
}: Proj) {
	const { width: size } = useWindowSize();

	return (
		<div
			style={!!color ? { backgroundColor: color } : undefined}
			className={`flex flex-col md:flex-row justify-around w-full md:h-[600px] items-center relative ${
				flip ? "flex-row" : "flex-row-reverse"
			}`}
			id={String(id)}
		>
			<span className="m-4 pt-8 sm:m-0">
				{img && (
					<Image className="rounded-lg" src={img} width={400} height={400} alt={title} />
				)}
				{comp && comp}
			</span>
			<a
				href={link}
				download={!link.includes("http")}
				className="w-96 sm:mb-20 md:mb-0 group"
			>
				<div className="m-4 mt-8 pt-0 px-4 pb-16 sm:p-4 sm:rounded  w-full  sm:m-0">
					<h2
						className={`mb-4 text-5xl transition-colors ${
							link ? "group-hover:text-secondary " : ""
						} ${dark ? "text-white" : ""}`}
					>
						{title}
					</h2>
					<p
						className={`mb-4 text-2xl ${
							link ? "group-hover:text-secondary" : ""
						} transition-colors ${dark ? "text-white " : ""}`}
					>
						{text}
					</p>
				</div>
			</a>
			{size > 600 && <ScrollArrow to={id + 1} bottom={bottom} />}
		</div>
	);
}
