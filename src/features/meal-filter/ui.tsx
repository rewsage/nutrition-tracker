import { Stack } from "@mui/material";

import { MealChip } from "@/shared/meal-chip";

interface MealFilterProps {
	categories: Record<"pizza" | "sushi" | "burgers", number>;
}

export function MealFilter({ categories, ...props }: MealFilterProps) {
	return (
		<Stack direction="row" columnGap={1.5}>
			{Object.entries(categories).map(([category, counter], index) => {
				return <MealChip key={index} category={category} counter={counter} />;
			})}
		</Stack>
	);
}
