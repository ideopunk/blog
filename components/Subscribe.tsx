import { ChangeEvent, FormEvent, useState } from "react";

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
		<form onSubmit={subscribe} className="flex flex-col max-w-lg bg-primary p-3">
			<h3 className="font-bold text-2xl font-sans">Subscribe</h3>
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
				className="outline-none text-xl h-7 appearance-none rounded-none w-full hover:bg-tertiary focus:bg-tertiary"
				type="email"
			/>
			<p className="mt-4">
				{message ? message : `Receive notifications about new blog posts.`}
			</p>
			<button
				className="mt-4 border-0 text-xl transition-all ease-out font-semibold tracking-wide p-2 bg-secondary hover:bg-tertiary  text-white hover:text-black"
				type="submit"
			>
				Subscribe
			</button>
		</form>
	);
}
