interface FakeData {
	id: number;
	title: string;
	category: string;
	date: string;
	imgSrc: string;
}

const fakeData: FakeData[] = [
	{
		id: 1,
		title: "двойная пепперони",
		category: "pizza",
		date: "2023-04-13",
		imgSrc: "🍕",
	},
	{
		id: 2,
		title: "текка маки",
		category: "sushi",
		date: "2023-04-12",
		imgSrc: "🍣",
	},
	{
		id: 3,
		title: "чизбургер",
		category: "burgers",
		date: "2023-04-13",
		imgSrc: "🍔",
	},
	{
		id: 4,
		title: "сашими",
		category: "sushi",
		date: "2023-04-10",
		imgSrc: "🍣",
	},
];

export function getFoodItems() {
	return fakeData;
}
