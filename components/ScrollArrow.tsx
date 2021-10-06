import Arrow from "./SVGs/ArrowSVG";

export default function ScrollArrow({ to, bottom }: { to: number; bottom: boolean }) {
	return (
		<>
			<a
				className={`w-9 h-9 absolute left-0 right-0 ml-auto mr-auto bottom-6 flex justify-center items-center rounded-full backdrop-opacity-50 transition ease-out hover:text-gray-300 hover:bg-gray-600 ${
					bottom && "rotate-180"
				}`}
				href={bottom ? "#" : `#${to}`}
			>
				<Arrow />
			</a>
		</>
	);
}
