const COLORS = {
	primary: "greenyellow",
	secondary: "yellow",
	info: "",
	success: "",
	warning: "",
	danger: "",
	black: "#000",
	greyDarkest: "#111",
	greyDarker: "#222",
	greyDark: "#444",
	grey: "#888",
	greyLight: "#ccc",
	greyLighter: "#eee",
	greyLightest: "#efefef",
	white: "#fff",
};

const DARKCOLORS = {
	colors: {
		primary: COLORS.primary,
		secondary: COLORS.secondary,
		body: {
			bg: COLORS.greyDarkest,
			fg: COLORS.greyLight,
		},
		header: {
			bg: COLORS.black,
			fg: COLORS.greyLight,
		},
		footer: {
			bg: COLORS.black,
			fg: COLORS.greyLight,
		},
	},
};

const LIGHTCOLORS = {
	colors: {
		primary: COLORS.primary,
		secondary: COLORS.secondary,
		body: {
			bg: COLORS.white,
			fg: COLORS.greyDark,
		},
		header: {
			bg: COLORS.greyDark,
			fg: COLORS.white,
		},
		footer: {
			bg: COLORS.greyDark,
			fg: COLORS.white,
		},
	},
};

export const THEME = {
	padding: {
		xs: "1rem",
		sm: "2rem",
		md: "3rem",
		lg: "4rem",
	},
	font: {
		body: "sans-serif",
		heading: "sans-serif",
		code: "monospace",
	},
	transition: {
		duration: {
			xs: ".1s",
			sm: ".2s",
		},
	},
};

export const DARKTHEME = { ...DARKCOLORS, ...THEME };

export const LIGHTTHEME = { ...LIGHTCOLORS, ...THEME };
