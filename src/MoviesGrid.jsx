import movies from "./movies.json";

export function MoviesGrid() {
	console.log(movies);
	return (
		<ul>
			{movies.map((movie) => (
				<li>{movie.title}</li>
			))}
		</ul>
	);
}
