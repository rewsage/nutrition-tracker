import type { Metadata } from "next";

import "./globals.css";
import ThemeRegistry from "./theme-registry";

export const metadata: Metadata = {
	title: "Nutrition Tracker",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<body>
				<ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
			</body>
		</html>
	);
}
