import { FoodData } from "@/shared/api/types";

export const sortVariants = [
	{
		sortType: "newestFirst",
		title: "сначала новые",
	},
	{
		sortType: "oldestFirst",
		title: "сначала старые",
	},
];

export type SortType = (typeof sortVariants)[number]["sortType"];

export function sortFoodItems(sortParams: SortType, foodItems: FoodData[]) {
	if (!sortParams) return foodItems;

	return foodItems.slice().sort((firstItem, secondItem) => {
		const firstTimestamp = Date.parse(firstItem.date);
		const secondTimestamp = Date.parse(secondItem.date);

		return sortByTime(sortParams, firstTimestamp, secondTimestamp);
	});
}

function sortByTime(sortType: SortType, a: number, b: number) {
	switch (sortType) {
		case "newestFirst":
			return b - a;
		case "oldestFirst":
			return a - b;
		default:
			throw new Error("Unknown type of sort");
	}
}
