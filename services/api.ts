export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_API_READ_ACCESS_TOKEN,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_READ_ACCESS_TOKEN}`,
  },
};

// const url =
//   "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzViOTgxZDIxZDFhZTkyMjVmZGVkNWI2ZGY3N2NjZiIsIm5iZiI6MTc0MTk2NTAzNy40MjMsInN1YiI6IjY3ZDQ0NmVkNTA2Y2M5MGQ2NDAyODNkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FFglHK-4b4l_WT32V7p9R4Ae8fpWSsXbU8p0lqCW4Io",
//   },
// };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error(err));
