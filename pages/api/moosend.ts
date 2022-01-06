import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { email } = req.body;

	if (!email) return res.status(400).json({ error: "Email is required" });

	try {
		const API_KEY = process.env.MOOSEND_API_KEY;
		const MAILING_LIST_ID = process.env.MOOSEND_MAILING_LIST_ID;

		const response = await fetch(
			`http://api.moosend.com/v3/subscribers/${MAILING_LIST_ID}/subscribe.json?apikey=${API_KEY}`,
			{
				body: JSON.stringify({ Email: email }),
				headers: { "Content-Type": "application/json" },
				method: "POST",
			}
		);

		if (response.status >= 400) {
			return res.status(400).json({
				error: `There was an error subscribing to the newsletter. Email me at ideopunk@gmail.com and I'll figure it out!`,
			});
		}

		const rj = await response.json();
		console.log(rj);
		if (rj.Error) return res.json({ error: rj.Error });

		// 8. If we made it this far, it was a success!
		return res.status(201).json({ error: "" });
	} catch (error) {
		return res.status(500).json({ error: error.message || error.toString() });
	}
};
