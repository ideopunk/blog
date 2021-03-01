import { useState } from "react";
import { siteColor, siteSecondaryColor } from "../consts/consts";
import utils from "../styles/utils.module.css";

export default function Subscribe() {
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
		} else {
			// 5. Clear the input value and show a success message.
			setEmail("");
			setMessage("Success! 🎉 You are now subscribed to the newsletter.");
		}
	};

	return (
		<form onSubmit={subscribe} className={`container`}>
			<h3>Subscribe</h3>
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
			<p className={utils.mrgTop}>
				{message ? message : `Receive notifications about new blog posts.`}
			</p>
			<button className={utils.mrgTop} type="submit">
				Subscribe
			</button>
			<style jsx>{`
				.container {
					max-width: 500px;
					height: 200px;
					display: flex;
					flex-direction: column;
					border-radius: 3px;
				}

				.container * {
					font-size: 1.2rem;
				}
				label {
					visibility: hidden;
				}

				input {
					outline: none;
					border: 2px solid ${siteColor};
					font-size: 1.5rem;
					height: 1.8rem;
				}

				button {
					border: 0;
					background-color: ${siteColor};
					font-size: 1.5rem;
					transition: all 0.2s ease-out;
					font-weight: 600;
					letter-spacing: 1px;
					padding: 0.5rem;
				}
			`}</style>
		</form>
	);
}
