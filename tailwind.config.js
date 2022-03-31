const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#137f94",
				secondary: "#df5c61",
				primaryLight: "hsl(190, 77%, 80%)",
				primaryDark: "hsl(230, 15%, 70%)",
				secondaryDark: "hsl(358, 785%, 45%)",
			},
			fontFamily: {
				...fontFamily,
				serif: ["Merriweather", "serif"],
				sans: ["Merriweather Sans", "sans-serif"],
				test: ["Anton"],
				fake: "Anton",
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme("colors.black"),
						fontFamily: "Merriweather",
						// a: {
						// 	color: theme("colors.primary"),
						// 	"&:hover": {
						// 		color: theme("colors.secondary"),
						// 	},
						// 	fontWeight: 400,
						// },
						em: {},
					},
				},
			}),
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
