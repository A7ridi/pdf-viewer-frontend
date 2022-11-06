import { CardContent, Typography } from "@mui/material";
import { Fragment } from "react";
import InputEditableField from "./InputEditableFIeld";
import InputField from "./InputField";

const CardComponent = ({
	data,
	editable = false,
	setProjectName = () => {},
	projectName = "",
}) => {
	const id = data?.id || "";
	const name = data?.name || "";
	const budget = data?.budget || "";
	const endDate = data?.endDate || "";

	return (
		<Fragment>
			<CardContent>
				<Typography
					sx={{ fontSize: 16, fontWeight: 600, textAlign: "center" }}
					gutterBottom
				>
					Project Data
				</Typography>
				<hr />
				{editable ? (
					<>
						<InputEditableField label="ProjectID" value={id} />
						<InputEditableField
							label="Project Name"
							editable="true"
							value={projectName}
							setProjectName={setProjectName}
						/>
						<InputEditableField label="Budget" value={budget} />
						<InputEditableField label="End Date" value={endDate} />
					</>
				) : (
					<>
						<InputField label="ProjectID" value={id} />
						<InputField label="Project Name" value={name} />
						<InputField label="Budget" value={budget} />
						<InputField label="End Date" value={endDate} />
					</>
				)}
			</CardContent>
		</Fragment>
	);
};

export default CardComponent;
