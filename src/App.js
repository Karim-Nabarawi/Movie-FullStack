import MovieList from "./Components/MovieList";

function App() {
  const theatersData = [
    {
      id: 1,
      title: "Spider-Man: No Way Home",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 2,
      title: "Spider-Man: No Way Home",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
    },
  ];

  const upComingData = [
    {
      id: 1,
      title: "Spider-Man: No Way Home",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 2,
      title: "Spider-Man: No Way Home",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
    },
  ];
  return (
    <div className="App">
      <h3>In Theaters</h3>
      <MovieList MoviesList={theatersData} />
      <h3>Upcoming Releases</h3>
      <MovieList MoviesList={upComingData} />
    </div>
  );
}

export default App;
