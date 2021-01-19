import Image from "next/image";
import utils from "../styles/utils.module.css";
import Head from "next/head";

export default function Project({ color, img, title, text, links }) {
	const nextifyLink = (link) => {
		return (
			<a className={utils.mrgR} href={link.url} target="_blank" rel="noreferrer">
				{link.domain}
			</a>
		);
	};

	return (
		<div className="container">
			<Image className={utils.rad} src={img} width={400} height={400} alt={title} />
			<div className="text-container">
				<h2 className={utils.mrgBot}>{title}</h2>
				<p className={utils.mrgBot}>{text}</p>
				{links.map((link) => nextifyLink(link))}
			</div>
			<style jsx>{`
				.container {
					background-color: ${color};
					display: flex;
					justify-content: space-around;
					width: 100%;
					height: 600px;
					align-items: center;
				}

				.text-container {
                    border: 1px solid grey;
                    padding: 1rem;
                    border-radius: 5px;
                    width: 300px;
				}

				.imj {
					border-radius: 15px;
					opacity: 0.5;
				}
			`}</style>
		</div>
	);
}
