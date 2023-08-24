import { Stack, StackProps } from "@mui/material";

import { MealFilter } from "@/features/meal-filter";
import { MealSort, SortType } from "@/features/meal-sort";

interface Props extends StackProps {
	onCategoryPick: (category: string) => void;
	onSortChange: (sortBy: SortType) => void;
	sortBy: SortType;
	activeCategory: string;
}

export function CardsControlPanel({
	onCategoryPick,
	onSortChange,
	sortBy,
	activeCategory,
	...props
}: Props) {
	return (
		<Stack
			direction={{ xs: "column", sm: "row" }}
			rowGap={2}
			justifyContent="space-between"
			alignItems="center"
			{...props}>
			<MealFilter
				onCategoryPick={onCategoryPick}
				activeCategory={activeCategory}
			/>
			<MealSort onSortChange={onSortChange} sortBy={sortBy} />
		</Stack>
	);
}
