import { MouseEventHandler } from "react";

import { Stack } from "@mui/material";

import { MealChip } from "@/shared/meal-chip";

interface MealFilterProps {
	categories: Array<[string, number]>;
	onCategoryPick: (category: string) => void;
}

export function MealFilter({
	categories,
	onCategoryPick,
	...props
}: MealFilterProps) {
	return (
		<Stack direction="row" columnGap={1.5}>
			{categories.map(([category, counter], index) => {
				return (
					<MealChip
						key={index}
						category={category}
						counter={counter}
						onClick={() => onCategoryPick(category)}
					/>
				);
			})}
		</Stack>
	);
}
