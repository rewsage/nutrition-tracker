import { Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { FoodCard } from "@/entities/food";
import { MealFilter } from "@/features/meal-filter";
import { getFoodItems } from "@/shared/api";

export default function Home() {
	const foodItems = getFoodItems();

	const getCategoriesMap = () => {
		const categoriesMap = new Map();

		for (let i = 0; i < foodItems.length; i++) {
			const category = foodItems[i].category;

			if (categoriesMap.has(category)) {
				const productsNum = categoriesMap.get(category);
				categoriesMap.set(category, productsNum + 1);
			} else {
				categoriesMap.set(category, 1);
			}
		}

		return Object.fromEntries(categoriesMap);
	};

	return (
		<Container sx={{ minHeight: "100vh" }}>
			<Typography variant="h4" py={5}>
				мое приложение
			</Typography>
			<Stack rowGap={2.5}>
				<MealFilter categories={getCategoriesMap()} />
				<Grid container rowSpacing={2} columnSpacing={3}>
					{foodItems.map(({ id, ...params }) => {
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
