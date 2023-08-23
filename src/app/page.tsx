"use client";

import { useMemo, useState } from "react";

import { Container, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { FoodCard } from "@/entities/food";
import { filterFoodItems } from "@/features/meal-filter";
import { SortByTime, sortFoodItems } from "@/features/meal-sort";
import { getFoodItems } from "@/shared/api";
import { Header } from "@/shared/ui";
import { CardsControlPanel } from "@/widgets/cards-control-panel";

export default function Home() {
	const [filterParams, setFilterParams] = useState<string | null>(null);
	const [sortParams, setSortParams] = useState<SortByTime>("newestFirst");

	const foodItems = getFoodItems();

	const sortedItems = useMemo(() => {
		return sortFoodItems(sortParams, foodItems);
	}, [sortParams, foodItems]);

	const filteredFoodItems = useMemo(() => {
		return filterFoodItems(filterParams, sortedItems);
	}, [filterParams, sortedItems]);

	return (
		<Container sx={{ minHeight: "100vh" }}>
			<Header />
			<Stack rowGap={2.5}>
				<CardsControlPanel
					onCategoryPick={(category) => {
						setFilterParams((prev) => (prev !== category ? category : null));
					}}
					activeCategory={filterParams ?? ""}
					onSortChange={(sortBy) => setSortParams(sortBy)}
					sortBy={sortParams}
				/>
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
