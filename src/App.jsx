import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function App() {
	return (
		<Router>
			<header>
				{/* <h1 className={styles.title}>Movies</h1> */}
				<Link to="/">Home</Link>
				<br />
				<Link to="/movie">Movie</Link>
			</header>
			<main>
				<Switch>
					<Route exact path="/movie">
						Movie
					</Route>
					<Route path="/">Home</Route>
				</Switch>
			</main>
		</Router>
	);
}
