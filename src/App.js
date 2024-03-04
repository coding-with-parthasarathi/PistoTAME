// filename -App.js
import React from "react";
//import "./App.css";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages/index";
import About from './pages/about';
import Contacts from './pages/contacts';
import Events from "./pages/events";
import Sponsors from "./pages/sponsors";
import Teams from "./pages/team";
import Tame from "./pages/tame";
function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route
					path="/events"
					element={<Events />}
				/>
				<Route
					path="/sponsors"
					element={<Sponsors />}
				/>
				<Route path="/team" element={<Teams />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route
					path="/tame"
					element={<Tame />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
