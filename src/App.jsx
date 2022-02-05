import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link, Routes, Navigate } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
	return (
		<Router>
			<header>
				<link to="/">
					<h1 className={styles.title}>Movies</h1>
				</link>
			</header>
			<main>
				<Routes>
					<Route path="/movie/:movieId" element={<MovieDetails />} />					
					<Route path="/" element={<LandingPage />} />
					<Route path="*" element={<Navigate replace to="/"/>} />
				</Routes>
			</main>
		</Router>
	);
}
