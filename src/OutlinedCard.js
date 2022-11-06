import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import jsPDF from "jspdf";
import CardComponent from "./CardComponent";
import { Link } from "react-router-dom";

export default function OutlinedCard() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchProjectData();
	}, []);

	let url = `https://pdf-editor-mern.onrender.com/api/v1/projects`;
	const fetchProjectData = () => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				if (data && data.project) {
					setData(data.project[0] || null);
				}
				setLoading(false);
			})
			.catch((err) => console.log(err));
	};

	const pdfGenerate = (e) => {
		e.preventDefault();
		let doc = new jsPDF("landscape", "px", "a4", "false");
		doc.setFont("Helvertica", "bold");
		doc.text(95, 40, "Project Data");
		doc.text(60, 60, "Project ID:");
		doc.text(60, 80, "Project Name:");
		doc.text(60, 100, "Budget:");
		doc.text(60, 120, "End Date:");
		doc.setFont("Helvertica", "normal");
		doc.text(150, 60, data?.id);
		doc.text(150, 80, data?.name);
		doc.text(150, 100, data?.budget.toString());
		doc.text(150, 120, data?.endDate.toString());

		doc.save("project.pdf");
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
							<CardComponent data={data} />
						) : (
							"Error loading data!!!"
						)}
					</Card>

					<CardActions
						sx={{
							justifyContent: "space-around",
							display: "flex",
							flexDirection: "column",
							gap: 1,
						}}
					>
						<Button
							variant="outlined"
							sx={{ width: "100%" }}
							disabled={loading}
							onClick={pdfGenerate}
						>
							Save Project Data (PDF File)
						</Button>

						<Link
							to={`/project/${data?._id}`}
							style={{ textDecoration: "none", width: "100%" }}
						>
							<Button variant="outlined" disabled={loading} sx={{ width: "100%" }}>
								Edit Project Data PDF
							</Button>
						</Link>
					</CardActions>
				</Grid>
			</Grid>
		</Box>
	);
}
