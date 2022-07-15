import type { RequestHandlerOutput } from "@sveltejs/kit";

import "dotenv/config";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }: { request: Request }): Promise<RequestHandlerOutput> {
	const { email } = await request.json();

	if (!email) {
		return { status: 400, body: { error: "Email is required" } };
	}

	try {
		const API_KEY = process.env.MOOSEND_API_KEY;
		const MAILING_LIST_ID = process.env.MOOSEND_MAILING_LIST_ID;
		const response = await fetch(
			`http://api.moosend.com/v3/subscribers/${MAILING_LIST_ID}/subscribe.json?apikey=${API_KEY}`,
			{
				body: JSON.stringify({ Email: email }),
				headers: { "Content-Type": "application/json" },
				method: "POST"
			}
		);

		if (response.status >= 400) {
			return {
				status: 400,
				body: {
					error: `There was an error subscribing to the newsletter. Email me at ideopunk@gmail.com and I'll figure it out!`
				}
			};
		}

		const rj: {
			Code: number;
			Error: string | null;
			context: { [key: string]: any };
		} = await response.json();

		console.log(rj);
		if (rj.Error) return { status: 500, body: { error: rj.Error } };

		// 8. If we made it this far, it was a success!
		return { status: 201, body: { error: "" } };
	} catch (error: any) {
		return {
			status: 500,
			body: {
				error: error?.message || error?.toString()
			}
		};
	}
}
