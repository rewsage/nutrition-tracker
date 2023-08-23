import { FoodData } from "@/shared/api/types";

export function getCategories(foodData: FoodData[]) {
	const categoriesMap = new Map<string, number>();

	for (let i = 0; i < foodData.length; i++) {
		const category = foodData[i].category;
		const productsNum = categoriesMap.get(category);

		if (productsNum !== undefined) {
			categoriesMap.set(category, productsNum + 1);
		} else {
			categoriesMap.set(category, 1);
		}
	}

	return Array.from(categoriesMap.entries());
}
