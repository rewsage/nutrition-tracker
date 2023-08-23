import { ExpandMore } from "@mui/icons-material";
import { Select, SelectProps, styled } from "@mui/material";

export const BasicSelect = styled((props: SelectProps) => (
	<Select
		IconComponent={ExpandMore}
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
			disableAutoFocusItem: true,
		}}
		{...props}
	/>
))(({ theme }) => ({
	"& .MuiOutlinedInput-notchedOutline": {
		border: "none",
	},
}));
