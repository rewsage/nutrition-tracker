import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";

const SBSansText = localFont({
	src: "../../public/fonts/SB-Sans-Text.woff2",
});

const SBSansDisplay = localFont({
	src: "../../public/fonts/SB-Sans-Display-Semibold.woff2",
});

declare module "@mui/material/styles" {
	interface Palette {
		border: Palette["primary"];
		pizza: Palette["primary"];
		sushi: Palette["primary"];
		burgers: Palette["primary"];
	}

	interface PaletteOptions {
		border?: PaletteOptions["primary"];
		pizza?: PaletteOptions["primary"];
		sushi?: PaletteOptions["primary"];
		burgers?: PaletteOptions["primary"];
	}
}

declare module "@mui/material/Chip" {
	interface ChipPropsColorOverrides {
		pizza: true;
		sushi: true;
		burgers: true;
	}
}

export const theme = createTheme({
	palette: {
		text: {
			primary: "#292929",
			secondary: "#878787",
		},
		border: {
			main: "#E3E3E3",
		},
		pizza: {
			main: "#FDF1DC",
			contrastText: "#292929",
		},
		sushi: {
			main: "#FBEBF1",
			contrastText: "#292929",
		},
		burgers: {
			main: "#E9FCEA",
			contrastText: "#292929",
		},
	},
	typography: {
		htmlFontSize: 16,
		fontFamily: SBSansText.style.fontFamily,
		h4: {
			fontFamily: SBSansDisplay.style.fontFamily,
			fontSize: "2.125rem",
		},
	},
});
