import { Typography } from "@mui/material";

export function Header() {
	return (
		<Typography
			variant="h4"
			pt={{ xs: 3, sm: 4, md: 10 }}
			pb={{ xs: 3, md: 5.5 }}>
			мое приложение
		</Typography>
	);
}
