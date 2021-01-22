import Date from "./Date";

export default function WritingPiece({ title, url, coauthor, date, blurb, status }) {
	return (
		<div className="writing-piece">
			<h2>
				<a href={url}>{title}</a>
			</h2>
			{coauthor && <small>with {coauthor}</small>}
			<Date dateString={date} />
			<p>{blurb}</p>

			<small>{status}</small>
			<style jsx>
				{`
					.writing-piece {
						max-width: 400px;
						padding: 1rem;
					}

					small {
						font-style: oblique;
						font-size: 0.6rem;
					}
				`}
			</style>
		</div>
	);
}
