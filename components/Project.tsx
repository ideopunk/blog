import Image from "next/image";
import ScrollArrow from "./ScrollArrow";
import useWindowSize from "../lib/useWindowSize";

type Lank = { url: string; domain: string };

const nextifyLink = (link: Lank, colorFlip: boolean) => {
	return (
		<a
			className="mr-4"
			style={{ color: `${colorFlip ? "green" : "white"}` }}
			href={link.url}
			target="_blank"
			rel="noreferrer"
		>
			{link.domain}
		</a>
	);
};

type Proj = {
	color: string;
	text: string;
	id: number;
	img?: string;
	comp?: JSX.Element;
	title?: string;
	link?: string;
	bottom?: boolean;
	flip?: boolean;
	colorFlip?: boolean;
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
	colorFlip,
	dark,
}: Proj) {
	const { width: size } = useWindowSize();

	return (
		<div
			style={{ backgroundColor: color }}
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
			<a href={link} className="w-96 sm:mb-20 md:mb-0 ">
				<div className="m-4 mt-8 pt-0 px-4 pb-16 sm:p-4 sm:rounded w-full sm:w-96  sm:m-0">
					<h2 className={`mb-4 text-5xl ${dark ? "text-white" : ""}`}>{title}</h2>
					<p className={`mb-4 text-2xl ${dark ? "text-white" : ""}`}>{text}</p>
				</div>
			</a>
			{size > 600 && <ScrollArrow to={id + 1} bottom={bottom} />}
		</div>
	);
}
