import { Typography, TypographyProps } from "@mui/material";

interface BasicDateProps extends TypographyProps {
	date: string;
}

export function BasicDate({ date, ...props }: BasicDateProps) {
	const dateObj = new Date(date);
	const formatter = new Intl.DateTimeFormat("ru");

	return (
		<Typography color="text.secondary" {...props}>
			{formatter.format(dateObj)}
		</Typography>
	);
}
