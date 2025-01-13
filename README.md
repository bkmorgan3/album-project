# Starting the Project

Clone the project and in the terminal CD into the directory and run `npm i` and then `npm run dev` to start the project locally.

## Upon Loading

User should see a responsive grid of albums from the iTunes API and a search bar. As a user searches, any relevant albums will render instead of all top albums.

### A Note About Single Album Details

I worked on the `single-item-fetch` branch to use this API endpoint to get album info one album however once deployed I ran into a CORS issue that I couldn't find a workaround for without a server.
`https://itunes.apple.com/lookup?id=${id}&entity=song` with the id coming from a useParams hook.

### Thank You

Thank you for the opportunity, this was a fun project and I look forward to disucssing my decisons in more detail with the team.
