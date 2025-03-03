This is a simple Movie Search App built with React.js that allows users to search for movies using the OMDb API. The app fetches movie details based on the user's query and displays the results.


<!-- Features -->

Search for movies by title.

Fetch movie details from OMDb API.

Display search results.

Error handling for failed API requests.

Responsive design using Tailwind CSS.


<!-- Install Dependencies -->

Node.js
npm
Axios
React.js
Axios (for API requests)
Tailwind CSS (for styling)

Create a .env file in the root directory and add OMDb API key Gotten from OMDb API.

<!-- Code Structure -->

*MovieApi.js

Uses useState for state management.

Fetches movie data using Axios from OMDb API.

Handles loading and error states.

Renders MovieCard component to display results.


*MovieCard.js

Receives movies array as props.

Maps through the results and displays each movie’s title, poster, and year.

*Navbar.js

receives fetch function, search value and setValue state as props