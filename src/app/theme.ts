import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";

const SBSansText = localFont({
	src: "../../public/fonts/SB-Sans-Text.woff2",
});

export const theme = createTheme({
	typography: {
		fontFamily: SBSansText.style.fontFamily,
	},
});
