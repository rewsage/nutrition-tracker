import { Stack, Typography } from "@mui/material";

import { MealChip } from "@/shared/meal-chip";
import { BasicDate, MealIcon } from "@/shared/ui";

interface FoodCardProps {
	title: string;
	category: string;
	date: string;
	imgSrc: string;
}

export function FoodCard({ title, category, date, imgSrc }: FoodCardProps) {
	return (
		<Stack
			borderRadius={1}
			border="1px solid"
			borderColor="border.main"
			p={2}
			rowGap={3}>
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<MealChip category={category} />
				<BasicDate date={date} />
			</Stack>
			<Stack direction="row" alignItems="center" columnGap={2}>
				<MealIcon icon={imgSrc} />
				<Typography>{title}</Typography>
			</Stack>
		</Stack>
	);
}
