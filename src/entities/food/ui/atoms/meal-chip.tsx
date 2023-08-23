import { Chip, ChipProps, Stack, Typography } from "@mui/material";
import dictionary from "public/dictionaries/ru.json";

import { inDictionary } from "@/entities/food/lib";

interface CategoryChipProps extends ChipProps {
	category: string;
	counter?: number;
}

export function MealChip({ category, counter, ...props }: CategoryChipProps) {
	const withCounter = counter !== undefined;

	const isCategoryInDict = inDictionary(dictionary.categories, category);
	const chipLabel = isCategoryInDict
		? dictionary.categories[category]
		: category;

	return (
		<Chip
			color={isCategoryInDict ? category : undefined}
			label={
				<Stack direction="row" columnGap={0.5}>
					<Typography
						color={withCounter ? "text.secondary" : "text.primary"}
						fontWeight={400}>
						{chipLabel}
					</Typography>
					{withCounter && (
						<Typography color="text.secondary" fontWeight={600}>
							{counter}
						</Typography>
					)}
				</Stack>
			}
			sx={{
				borderRadius: withCounter ? 4 : 1,
				height: "auto",
				"& .MuiChip-label": {
					py: 0.5,
					px: withCounter ? 2 : 1,
				},
				cursor: withCounter ? "pointer" : "auto",
			}}
			{...props}
		/>
	);
}
