import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3/';
const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODg3OGNlMWU1ZTc5OTJhYmMzZGQ5YTJjNDM2ODQ3YiIsInN1YiI6IjYxOWE4MmY2NGY5YTk5MDA0MzczMmI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rszseogV0rWlHUFOsy58Xd1mNRelkLfwDkK9eCF47wk';

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
