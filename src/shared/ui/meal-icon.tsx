import { Typography, TypographyProps } from "@mui/material";

interface MealIcon extends TypographyProps {
	icon: string;
}

export function MealIcon({ icon, ...props }: MealIcon) {
	return (
		<Typography fontSize={64} lineHeight={1} {...props}>
			{icon}
		</Typography>
	);
}
