import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent } from "@mui/material/Select";

import { BasicSelect } from "@/shared/ui";

import { SortByTime } from "./model";

interface MealSortProps {
	sortBy: SortByTime;
	onSortChange: (sortBy: SortByTime) => void;
}

export function MealSort({ sortBy, onSortChange, ...props }: MealSortProps) {
	const handleChange = (event: SelectChangeEvent<unknown>) => {
		const value = event.target.value;
		if (value === "newestFirst" || value === "oldestFirst") {
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
				<MenuItem value={"newestFirst"}>сначала новые</MenuItem>
				<MenuItem value={"oldestFirst"}>сначала старые</MenuItem>
			</BasicSelect>
		</FormControl>
	);
}
