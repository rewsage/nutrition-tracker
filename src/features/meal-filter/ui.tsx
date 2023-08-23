"use client";

import { useMemo } from "react";

import { Stack } from "@mui/material";

import { MealChip } from "@/entities/food";
import { getFoodItems } from "@/shared/api";

import { getCategories } from "./lib";

interface MealFilterProps {
	onCategoryPick: (category: string) => void;
	activeCategory: string;
}

export function MealFilter({
	onCategoryPick,
	activeCategory,
	...props
}: MealFilterProps) {
	const foodItems = getFoodItems();
	const categories = useMemo(() => {
		return getCategories(foodItems);
	}, [foodItems]);

	return (
		<Stack direction="row" columnGap={1.5} {...props}>
			{categories.map(([category, counter], index) => {
				return (
					<MealChip
						key={index}
						category={category}
						counter={counter}
						isHighlighted={activeCategory === category}
						onClick={() => onCategoryPick(category)}
					/>
				);
			})}
		</Stack>
	);
}
