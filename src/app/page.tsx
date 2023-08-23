"use client";

import { useCallback, useMemo, useState } from "react";

import { Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { timeStamp } from "console";

import { FoodCard } from "@/entities/food";
import { MealFilter } from "@/features/meal-filter";
import { MealSort } from "@/features/meal-sort";
import { getFoodItems } from "@/shared/api";

export default function Home() {
	const [filterParams, setFilterParams] = useState<string | null>(null);
	const [sortParams, setSortParams] = useState<string>("newestFirst");

	const foodItems = getFoodItems();
	const sortedItems = useMemo(() => {
		if (!sortParams) return foodItems;

		return foodItems.sort((a, b) => {
			const firstTimestamp = Date.parse(a.date);
			const secondTimestamp = Date.parse(b.date);

			return sortParams === "newestFirst"
				? secondTimestamp - firstTimestamp
				: firstTimestamp - secondTimestamp;
		});
	}, [sortParams, foodItems]);

	const categories = useMemo(() => {
		const categoriesMap = new Map<string, number>();

		for (let i = 0; i < foodItems.length; i++) {
			const category = foodItems[i].category;
			const productsNum = categoriesMap.get(category);

			if (productsNum !== undefined) {
				categoriesMap.set(category, productsNum + 1);
			} else {
				categoriesMap.set(category, 1);
			}
		}

		return Array.from(categoriesMap.entries());
	}, [foodItems]);

	const filteredFoodItems = useMemo(() => {
		if (!filterParams) {
			return sortedItems;
		} else {
			return sortedItems.filter(({ category }) => category === filterParams);
		}
	}, [filterParams, sortedItems]);

	return (
		<Container sx={{ minHeight: "100vh" }}>
			<Typography variant="h4" py={5}>
				мое приложение
			</Typography>
			<Stack rowGap={2.5}>
				<Stack
					direction={{ xs: "column", sm: "row" }}
					rowGap={2}
					justifyContent="space-between"
					alignItems="center">
					<MealFilter
						categories={categories}
						onCategoryPick={(category) => {
							setFilterParams((prev) => (prev !== category ? category : null));
						}}
					/>
					<MealSort onSortChange={(sortBy) => setSortParams(sortBy)} />
				</Stack>
				<Grid container rowSpacing={2} columnSpacing={3}>
					{filteredFoodItems.map(({ id, ...params }) => {
						return (
							<Grid key={id} xs={12} sm={6} md={4}>
								<FoodCard {...params} />
							</Grid>
						);
					})}
				</Grid>
			</Stack>
		</Container>
	);
}
