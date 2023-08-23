interface CategoryDictionary {
	pizza: string;
	sushi: string;
	burgers: string;
}

export function inDictionary(
	dictionary: CategoryDictionary,
	category: string,
): category is keyof CategoryDictionary {
	return category in dictionary;
}
