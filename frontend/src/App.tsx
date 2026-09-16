import 'dotenv/config'

const clientId = process.env.David; // Replace with your client id
const code = undefined;

if (!code) {
    redirectToAuthCodeFlow(clientId);
} else {
    const accessToken = await getAccessToken(clientId, code);
    const profile = await fetchProfile(accessToken);
    populateUI(profile);
}

async function redirectToAuthCodeFlow(clientId: string) {
    // TODO: Redirect to Spotify authorization page
}

async function getAccessToken(clientId: string, code: string) {
  // TODO: Get access token for code
}

async function fetchProfile(token: string): Promise<any> {
    // TODO: Call Web API
}

function populateUI(profile: any) {
    // TODO: Update UI with profile data
}

function App() {
  return (
    <main className="min-h-screen bg-neutral-950 p-10 text-white">
      <h1 className="text-4xl font-bold">Spotify-Projekt</h1>
    </main>
  );
}

export default App;