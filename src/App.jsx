import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import BestShoesComponent from "./components/BestShoesComponent";
import Home from "./components/Home";
import RunningShoesFinder from "./components/RunningShoesFinder";
import TrainingCalculator from "./components/TrainingCalculator";

function App() {
	return (
		<Router>
			<>
				<NavComponent />
				<BestShoesComponent />
				<Routes>
					<Route path='/' element={Home} />
					<Route path='training-calculator' element={TrainingCalculator} />
					<Route path='running-shoes-finder' element={RunningShoesFinder} />
				</Routes>
			</>
		</Router>
	);
}

export default App;
