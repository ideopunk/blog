import { ChangeEvent, FormEvent, useState } from "react";
import { siteColor, siteSecondaryColor } from "../consts/consts";

export default function Subscribe() {
	// 1. Create a reference to the input so we can fetch/clear it's value.
	const [email, setEmail] = useState("");
	// 2. Hold a message in state to handle the response from our API.
	const [message, setMessage] = useState("");

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		setEmail(e.target.value);
	}

	async function subscribe(e: FormEvent) {
		e.preventDefault();

		// 3. Send a request to our API with the user's email address.
		const res = await fetch("/api/subscribe", {
			body: JSON.stringify({ email: email }),
			headers: { "Content-Type": "application/json" },
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
	}

	return (
		<form onSubmit={subscribe} className="h-48 flex flex-col rounded max-w-lg">
			<h3>Subscribe</h3>
			<label className="invisible" htmlFor="email-input">
				Email address
			</label>
			<input
				id="email-input"
				name="email"
				value={email}
				placeholder="Email address"
				required
				onChange={handleChange}
				className="outline-none border-2 text-xl h-7 border-primary"
				type="email"
			/>
			<p className="mt-4">
				{message ? message : `Receive notifications about new blog posts.`}
			</p>
			<button
				className="mt-4 border-0 text-xl transition ease-out font-semibold tracking-wide p-2 bg-primary"
				type="submit"
			>
				Subscribe
			</button>
		</form>
	);
}
