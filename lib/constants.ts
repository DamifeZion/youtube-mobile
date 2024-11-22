import { darken, lighten, adjustOpacity } from "@/lib/tiny-color";

// NOTE: Make sure to sync the @react-navigation/theme. To match this color currently set here, when you run npm i.

// BASE COLORS AND STYLES DECLARATIONS
const generalColors = {
	shadow: "rgb(0, 0, 0)",
	black: "rgb(0, 0, 0)",
	white: "rgb(255, 255, 255)",
	light_blue: "#5CA4F8",
};

const light = {
	background: "hsl(0 0% 100%)",
	foreground: "hsl(240 10% 3.9%)",

	primary: "hsl(240 5.9% 10%)",
	primary_foreground: "hsl(240 5.9% 10%)",

	secondary: "hsl(240 4.8% 95.9%)",
	secondary_foreground: "hsl(240 5.9% 10%)",

	muted: "hsl(240 4.8% 95.9%)",
	muted_foreground: "hsl(240 3.8% 46.1%)",

	card: "hsl(0 0% 100%)",
	card_foreground: "hsl(240 10% 3.9%)",

	destructive: "hsl(0 84.2% 60.2%)",
	destructive_foreground: "hsl(0 0% 98%)",

	border: "hsl(240 5.9% 90%)",
	ring: "hsl(240 5.9% 10%)",
	...generalColors,
};

const dark = {
	background: "hsl(240 10% 3.9%)",
	foreground: "hsl(0 0% 98%)",

	primary: "hsl(0 0% 98%)",
	primary_foreground: "hsl(240 5.9% 10%)",

	secondary: "hsl(240 3.7% 15.9%)",
	secondary_foreground: "hsl(0 0% 98%)",

	muted: "hsl(240 3.7% 15.9%)",
	muted_foreground: "hsl(240 5% 64.9%)",

	card: "hsl(240 10% 3.9%)",
	card_foreground: "hsl(0 0% 98%)",

	destructive: "hsl(0 72% 51%)",
	destructive_foreground: "hsl(0 0% 98%)",

	border: "hsl(240 3.7% 15.9%)",
	ring: "hsl(240 4.9% 83.9%)",
	...generalColors,
};

const color = {
	light,
	dark,
};

const radius = {
	xs: 2,
	sm: 4,
	md: 8,
	lg: 16,
	xl: 32,
	full: 999,
};

const spacing = {
	xxs: 2,
	xs: 4,
	sm: 8,
	md: 16,
	lg: 24,
	xl: 32,
	xxl: 40,
	xxxl: 56,
};

const fontsize = {
	xs: 12,
	sm: 14,
	md: 16,
	lg: 20,
	xl: 24,
	xxl: 28,
	xxxl: 32,
};

const layout = {
	tabBarHeight: 60,
};

const shadow = {
	light: {
		xs: {
			shadowColor: adjustOpacity(color.light.shadow, 0.05),
			shadowOffset: {
				width: 0,
				height: 1,
			},
			shadowadjustOpacity: 0.15,
			shadowRadius: 1.0,
			elevation: 1,
		},
		sm: {
			shadowColor: adjustOpacity(color.light.shadow, 0.1),
			shadowOffset: { width: 0, height: 2 },
			shadowadjustOpacity: 0.1,
			shadowRadius: 4,
			elevation: 2,
		},
		md: {
			shadowColor: adjustOpacity(color.light.shadow, 0.2),
			shadowOffset: { width: 0, height: 4 },
			shadowadjustOpacity: 0.2,
			shadowRadius: 8,
			elevation: 4,
		},
		lg: {
			shadowColor: adjustOpacity(color.light.shadow, 0.3),
			shadowOffset: { width: 0, height: 6 },
			shadowOpacity: 0.3,
			shadowRadius: 12,
			elevation: 6,
		},
	},
	// Currently no need for dark shadow on dark mode,. So default to empty and avoid errors
	dark: {
		xs: {},
		sm: {},
		md: {},
		lg: {},
	},
};

export const UI = {
	color,
	radius,
	spacing,
	fontsize,
	shadow,
	adjustOpacity, // Function to adjust opacity
	lighten, // Function to lighten colour
	darken, // Function to darken colour
	layout,
};
