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
			method: "POST"
		});

		const { error }: { error?: string } = await res.json();

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
			className="flex flex-col max-w-lg border-2 rounded-lg border-primary dark:border-primaryDark px-6 pb-4"
		>
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
				className="outline-none border-2 bg-transparent border-transparent hover:border-secondary dark:hover:border-secondaryDark focus:border-secondary dark:focus:border-secondaryDark border-b-secondary dark:border-b-secondaryDark placeholder:opacity-50 placeholder:text-primary dark:placeholder:text-white text-xl h-7 appearance-none rounded-sm w-full  transition-all py-4"
				type="email"
			/>
			<p className="mt-4 text-primary dark:text-secondaryDark">
				Receive notifications about new blog posts.
			</p>
			<button
				className="mt-4  text-xl transition-all ease-out font-semibold tracking-wide p-2 rounded-lg 
				bg-secondary dark:bg-secondaryDark hover:bg-secondaryDark  text-white dark:text-stone-300 
				 hover:-translate-y-0.5 active:translate-y-0.5 outline-none"
				type="submit"
			>
				Subscribe
			</button>
		</form>
	);
}
