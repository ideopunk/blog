import { useState } from "react";
import { siteColor } from "./Layout";

export default function Subscribe({ front }) {
	// 1. Create a reference to the input so we can fetch/clear it's value.
	const [email, setEmail] = useState("");
	// 2. Hold a message in state to handle the response from our API.
	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		setEmail(e.target.value);
	};

	const subscribe = async (e) => {
		e.preventDefault();

		// 3. Send a request to our API with the user's email address.
		const res = await fetch("/api/subscribe", {
			body: JSON.stringify({
				email: email,
			}),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		const { error } = await res.json();

		if (error) {
			// 4. If there was an error, update the message in state.
			setMessage(error);
			return;
		}

		// 5. Clear the input value and show a success message.
		setEmail("");
		setMessage("Success! 🎉 You are now subscribed to the newsletter.");
	};

	return (
		<form onSubmit={subscribe} className={`container card ${front && "corner"}`}>
			<h2>Subscribe</h2>
			<label htmlFor="email-input">Email address</label>
			<input
				id="email-input"
				name="email"
				value={email}
				placeholder="Email address"
				required
				onChange={handleChange}
				type="email"
			/>
			<div>
				{message ? message : `Receive notifications of new blog posts and other updates. `}
			</div>
			<button type="submit">{"Subscribe"}</button>
			<style jsx>{`
				.container {
					max-width: 500px;
					height: 200px;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
				}

				button {
					background-color: pink;
					border: 1px solid #e75480;
				}

				label {
					visibility: hidden;
				}

				input {
					outline: none;
					border: 2px solid green;
				}

				input:active,
				input:focus {
				}

				button {
					background-color: ${siteColor};
					border: 2px solid pink;
					transition: all 0.2s ease-out;
				}

				button:hover {
					background-color: lightpink;
				}
				.corner {
					border-bottom-right-radius: 20px;
				}

				@media (max-width: 1000px) {
					.corner {
						border-bottom-left-radius: 20px;
					}
				}
			`}</style>
		</form>
	);
}
