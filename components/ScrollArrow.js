import { useEffect } from "react";
import Arrow from "./SVGs/ArrowSVG";

export default function ScrollArrow({ to, bottom }) {
	return (
		<>
			<a className="arrow" href={bottom ? "#" : `#${to}`}>
				<Arrow />
			</a>
			<style jsx>{`
				.arrow {
					width: 35px;
					height: 35px;
					position: absolute;
					left: 0;
					right: 0;
					margin-left: auto;
					margin-right: auto;
					bottom: 1.5rem;
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: rgba(100, 100, 100, 0.5);
					border-radius: 9999px;
					transition: all 0.2s ease-out;
					${bottom && "transform: scaleY(-1)"}
				}

				.arrow:hover {
					color: rgb(200, 200, 200);
					background-color: rgba(100, 100, 100, 0.75);
				}
			`}</style>
		</>
	);
}
