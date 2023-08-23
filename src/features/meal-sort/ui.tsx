import { useState } from "react";

import { ExpandLess } from "@mui/icons-material";
import { styled } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select";

const StyledSelect = styled((props: SelectProps) => (
	<Select
		IconComponent={ExpandLess}
		MenuProps={{
			sx: {
				"& .MuiPaper-root": {
					borderRadius: 2,
				},
				"& .MuiMenuItem-root": {
					px: 2,
					py: 1.5,
				},
				"& .MuiList-root": {
					p: 0,
				},
			},
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "right",
			},
			transformOrigin: {
				vertical: "top",
				horizontal: "right",
			},
		}}
		{...props}
	/>
))(({ theme }) => ({
	"& .MuiOutlinedInput-notchedOutline": {
		border: "none",
	},
}));

interface MealSortProps {
	onSortChange: (sortBy: string) => void;
}

export function MealSort({ onSortChange, ...props }: MealSortProps) {
	const [sortBy, setSortBy] = useState("newestFirst");

	const handleChange = (event: SelectChangeEvent<unknown>) => {
		const value = event.target.value;
		if (typeof value === "string") {
			setSortBy(value);
			onSortChange(value);
		}
	};

	return (
		<FormControl>
			<StyledSelect
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={sortBy}
				onChange={handleChange}
				{...props}>
				<MenuItem value={"newestFirst"}>сначала новые</MenuItem>
				<MenuItem value={"oldestFirst"}>сначала старые</MenuItem>
			</StyledSelect>
		</FormControl>
	);
}
