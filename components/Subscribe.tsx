import { ChangeEvent, FormEvent, useState } from "react";

export default function Subscribe() {
	const [email, setEmail] = useState("");

	const [message, setMessage] = useState("");

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		setEmail(e.target.value);
	}

	async function subscribe(e: FormEvent) {
		e.preventDefault();

		const res = await fetch("/api/subscribe", {
			body: JSON.stringify({ email: email }),
			headers: { "Content-Type": "application/json" },
			method: "POST",
		});

		const { error } = await res.json();

		if (error) {
			setMessage(error);
		} else {
			setEmail("");
			setMessage("Success! 🎉 You are now subscribed to the newsletter.");
		}
	}

	return (
		<form onSubmit={subscribe} className="flex flex-col max-w-lg bg-primary p-3">
			<h3 className="font-bold text-white text-2xl font-sans">Subscribe</h3>
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
				className="outline-none text-xl h-7 appearance-none rounded-none w-full hover:bg-tertiary focus:bg-tertiary transition-colors pt-[2px] pl-1"
				type="email"
			/>
			<p className="mt-4 text-white">
				{message ? message : `Receive notifications about new blog posts.`}
			</p>
			<button
				className="mt-4 border-0 text-xl transition-all ease-out font-semibold tracking-wide p-2 bg-secondary hover:bg-tertiary  text-black hover:text-black"
				type="submit"
			>
				Subscribe
			</button>
		</form>
	);
}
