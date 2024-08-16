
## Brief.ly

Brief.ly is a web application that takes an article URL and generates a concise summary of its content using AI. Built with React + Vite, TailwindCSS for styling, Redux Toolkit for state management, and a summarization API via RapidAPI to fetch the article summaries.

Check out the live demo of the application [here](https://briefly-summarize-with-ai.netlify.app/).

### Features
- **Instant Article Summarization**: Enter a URL, and the app will deliver a short summary using the [RapidAPI Article Summarizer](https://rapidapi.com/restyler/api/article-extractor-and-summarizer) service. The API is integrated with Redux Toolkit's `createApi` for querying.
- **Persistent History**: Users can revisit previous article summaries saved in the browser's local storage. Can also easily copy article URLs from the browser history.
- **Responsive Design**: The app is fully responsive, leveraging TailwindCSS for an adaptive layout on any device.

### Tech Stack
- React + Vite
- Redux Toolkit: Simplified state management and API handling
- TailwindCSS: For styling and responsive design.
- RapidAPI: For interacting with the article summarizer API.