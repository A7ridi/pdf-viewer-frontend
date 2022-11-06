import { Box, Button, Card, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardComponent from "./CardComponent";

const SingleProject = () => {
	const navigate = useNavigate();
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [projectName, setProjectName] = useState(data?.name || "");
	const [updateLoading, setUpdateLoading] = useState(false);

	useEffect(() => {
		fetchProjectData();
	}, []);

	let url = `https://pdf-editor-mern.onrender.com/api/v1/projects`;
	const fetchProjectData = () => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				if (data && data.project) {
					setData(data.project[0]);
					setProjectName(data.project[0].name);
				}
				setLoading(false);
			})
			.catch((err) => console.log(err));
	};

	let updateUrl = `https://pdf-editor-mern.onrender.com/api/v1/project/${data?._id}`;

	const savePdfToServer = () => {
		if (projectName.length === 0) alert("Enter project name");
		else {
			setUpdateLoading(true);
			fetch(updateUrl, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name: projectName }),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data) {
						setUpdateLoading(false);
						navigate("/");
					}
					setLoading(false);
				})
				.catch((err) => console.log(err));
		}
	};
	return (
		<Box sx={{ minWidth: 275, padding: 10 }}>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Card
						variant="outlined"
						sx={{ borderRadius: 3, border: "1.5px solid blue" }}
					>
						{loading ? (
							"Please wait 30 sec while loading..."
						) : data !== null ? (
							<CardComponent
								data={data}
								projectName={projectName}
								editable={true}
								setProjectName={setProjectName}
							/>
						) : (
							"Error loading data!!!"
						)}
					</Card>
					<Button
						variant="outlined"
						disabled={loading || updateLoading}
						onClick={savePdfToServer}
						sx={{ width: "100%", marginTop: 1 }}
					>
						{updateLoading ? "Uploading PDF to Server..." : "Save PDF to Server"}
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
};

export default SingleProject;
