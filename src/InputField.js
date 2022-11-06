import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const InputField = ({ value = "", label = "" }) => {
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
				<input
					style={{ width: "60%", padding: "5px" }}
					id="projectId"
					type="text"
					value={value}
				/>
			</Box>
		</Box>
	);
};

export default InputField;
