export type ThemeComponentNames = "button" | "link" | "connectedPill" | "notConnectedPill" | "loadingPill" | "connectPill"
export type ThemeComponents = Record<ThemeComponentNames, string>

const createThemeMap = <T extends {[name: string]: ThemeComponents}>(map: T): T => map;

export const themeMap = createThemeMap({
	base: {
		button:
			"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 ",
		link: "",
		connectedPill:
			"inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800",
		notConnectedPill:
			"inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-stone-200 text-stone-900",
		loadingPill:
			"inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-600 text-white",
		connectPill:
			"inline-flex items-center shadow px-2.5 py-0.5 text-sm leading-5 font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700",
	},
});

export type Theme = keyof typeof themeMap