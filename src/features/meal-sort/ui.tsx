import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent } from "@mui/material/Select";

import { BasicSelect } from "@/shared/ui";

import { SortType, sortVariants } from "./model";

interface MealSortProps {
	sortBy: SortType;
	onSortChange: (sortBy: SortType) => void;
}

export function MealSort({ sortBy, onSortChange, ...props }: MealSortProps) {
	const handleChange = (event: SelectChangeEvent<unknown>) => {
		const value = event.target.value;
		if (typeof value === "string") {
			onSortChange(value);
		}
	};

	return (
		<FormControl>
			<BasicSelect
				labelId="meal-sort-select-label"
				id="meal-sort-select"
				value={sortBy}
				onChange={handleChange}
				{...props}>
				{sortVariants.map(({ sortType, title }, index) => {
					return (
						<MenuItem key={index} value={sortType}>
							{title}
						</MenuItem>
					);
				})}
			</BasicSelect>
		</FormControl>
	);
}
