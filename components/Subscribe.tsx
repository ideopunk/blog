import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function Subscribe() {
	const [email, setEmail] = useState("");

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
			toast(error);
		} else {
			setEmail("");
			toast("Success! 🎉 You are now subscribed to the newsletter.");
		}
	}

	return (
		<form
			onSubmit={subscribe}
			className="flex flex-col max-w-lg border-2 rounded-lg border-primary px-6 pb-4"
		>
			{/* <h3 className="font-bold text-primary text-2xl font-sans">Subscribe</h3> */}
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
				className="outline-none border-b-2 border-secondary placeholder:opacity-50 hover:placeholder:opacity-75 focus:placeholder:opacity-75 placeholder:text-primary text-xl h-7 appearance-none rounded-none w-full  transition-colors py-4"
				type="email"
			/>
			<p className="mt-4 text-primary">Receive notifications about new blog posts.</p>
			<button
				className="mt-4 border-0 text-xl transition-all ease-out font-semibold tracking-wide p-2 rounded-lg bg-secondary hover:bg-tertiary  text-white"
				type="submit"
			>
				Subscribe
			</button>
		</form>
	);
}
