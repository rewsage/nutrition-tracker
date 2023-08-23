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
		date: "04.13.2023",
		imgSrc: "🍕",
	},
	{
		id: 2,
		title: "текка маки",
		category: "sushi",
		date: "04.12.2023",
		imgSrc: "🍣",
	},
	{
		id: 3,
		title: "чизбургер",
		category: "burgers",
		date: "04.13.2023",
		imgSrc: "🍔",
	},
	{
		id: 4,
		title: "сашими",
		category: "sushi",
		date: "04.10.2023",
		imgSrc: "🍣",
	},
];

export function getFoodItems() {
	return fakeData;
}
