import { FoodData } from "@/shared/api/types";

export type SortByTime = "newestFirst" | "oldestFirst";

export function sortFoodItems(
	sortParams: "newestFirst" | "oldestFirst",
	foodItems: FoodData[],
) {
	if (!sortParams) return foodItems;

	return foodItems.sort((firstItem, secondItem) => {
		const firstTimestamp = Date.parse(firstItem.date);
		const secondTimestamp = Date.parse(secondItem.date);

		return sortParams === "newestFirst"
			? secondTimestamp - firstTimestamp
			: firstTimestamp - secondTimestamp;
	});
}
