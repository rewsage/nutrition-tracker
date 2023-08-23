import { FoodData } from "@/shared/api/types";

export function filterFoodItems(
	filterParams: string | null,
	foodItems: FoodData[],
) {
	if (!filterParams) return foodItems;
	return foodItems.filter(({ category }) => category === filterParams);
}
