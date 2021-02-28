import Image from "next/image";
import utils from "../styles/utils.module.css";
import ScrollArrow from "./ScrollArrow";

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
}) {
	const nextifyLink = (link, colorFlip) => {
		return (
			<a
				className={utils.mrgR}
				style={{ color: `${colorFlip && "green"}` }}
				href={link.url}
				target="_blank"
				rel="noreferrer"
			>
				{link.domain}
			</a>
		);
	};

	return (
		<div className="container" id={id}>
			<span>
				{img && (
					<Image className={utils.rad} src={img} width={400} height={400} alt={title} />
				)}
				{comp && comp}
			</span>
			<div className="text-container">
				<h2 className={utils.mrgBot}>{title}</h2>
				<p className={utils.mrgBot}>{text}</p>
				{links && links.map((link) => nextifyLink(link, colorFlip))}
			</div>
			<ScrollArrow to={id + 1} bottom={bottom} />
			<style jsx>{`
				.container {
					background-color: ${color};
					display: flex;
					justify-content: space-around;
					width: 100%;
					height: 600px;
					align-items: center;
					position: relative;
					flex-direction: ${flip ? "row-reverse" : "row"};
				}

				p,
				h2 {
					color: ${dark && "white"};
				}

				.text-container {
					 {
						/* border: 1px solid grey; */
					}
					padding: 1rem;
					border-radius: 5px;
					width: 400px;
				}

				.imj {
					border-radius: 15px;
					opacity: 0.5;
				}

				@media (max-width: 600px) {
					.container {
						flex-direction: column;
						height: fit-content;
					}

					.container > * {
						margin: 1rem;
						margin-top: 2rem;
					}

					.text-container {
						padding: 1rem;
						width: 100%;
						margin-top: 0;
						padding-top: 0;
						padding-bottom: 4rem;
					}
				}
			`}</style>
		</div>
	);
}
