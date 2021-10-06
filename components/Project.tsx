import Image from "next/image";
import ScrollArrow from "./ScrollArrow";
import useWindowSize from "../lib/useWindowSize";

type Lank = { url: string; domain: string };

const nextifyLink = (link: Lank, colorFlip: boolean) => {
	return (
		<a
			className="mr-4"
			style={{ color: `${colorFlip && "green"}` }}
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
	links?: Lank[];
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
	links,
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
			className={`flex flex-col sm:flex-row justify-around w-full h-[600px] items-center relative ${
				flip ? "flex-row" : "flex-row-reverse"
			}`}
			id={String(id)}
		>
			<span className="m-4 mt-8 sm:m-0">
				{img && (
					<Image className="rounded-lg" src={img} width={400} height={400} alt={title} />
				)}
				{comp && comp}
			</span>
			<div className="m-4 mt-8 pt-0 px-4 pb-16 sm:p-4 sm:rounded w-full sm:w-96  sm:m-0">
				<h2 className={`mb-4 ${dark ? "text-white" : ""}`}>{title}</h2>
				<p className={`mb-4 ${dark ? "text-white" : ""}`}>{text}</p>
				{links?.length && links.map((link) => nextifyLink(link, colorFlip))}
			</div>
			{size > 600 && <ScrollArrow to={id + 1} bottom={bottom} />}
		</div>
	);
}
