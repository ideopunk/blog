module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", // or 'media' or false
	theme: {
		extend: {
			colors: {
				primary: "#547a84",
				secondary: "#df9c61",
				// primary: "#724f74",
				// secondary: "#fa4d5e",
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme("colors.black"),
						a: {
							color: theme("colors.primary"),
							"&:hover": {
								color: theme("colors.secondary"),
							},
						},
					},
				},
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
};
