import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const InputEditableField = ({
	value = "",
	label = "",
	editable = false,
	setProjectName = () => {},
}) => {
	return (
		<Box
			component="div"
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				margin: 1,
			}}
		>
			<Typography sx={{ fontSize: 16 }}>{label}</Typography>
			<Box
				component="div"
				sx={{
					display: "flex",
					width: "70%",
					justifyContent: "flex-end",
				}}
			>
				:
				{editable ? (
					<input
						style={{ width: "60%", padding: "5px" }}
						id="projectId"
						type="text"
						value={value}
						onChange={(e) => setProjectName(e.target.value)}
					/>
				) : (
					<Box component="div" sx={{ width: "63%" }}>
						{value}
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default InputEditableField;
