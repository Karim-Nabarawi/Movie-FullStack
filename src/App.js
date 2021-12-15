import Movie from "./Components/Movie";

function App() {
  const data = {
    id: 1,
    title: "Spider-Man: No Way Home",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
  };
  return (
    <div className="App">
      <Movie movieData={data} />
    </div>
  );
}

export default App;
