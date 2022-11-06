import OutlinedCard from "./OutlinedCard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleProject from "./SingleProject";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<OutlinedCard />} />
				<Route exact path="/project/:id" element={<SingleProject />} />
			</Routes>
		</Router>
	);
}
