interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope?: string;
}

interface SpotifyErrorResponse {
  error: {
    status: number;
    message: string;
  };
}

/**
 * Gets an access token from Spotify API
 * @returns Promise<string> Access token
 */
export async function getSpotifyToken(): Promise<string> {
  // Validate environment variables
  if (!process.env.SPOTIFY_CLIENT_ID || !process.env.SPOTIFY_CLIENT_SECRET) {
    console.error('Missing Spotify API credentials in environment variables');
    throw new Error('Missing Spotify API credentials in environment variables');
  }

  // Log that we're attempting to get a token (without exposing credentials)
  console.log('Attempting to get Spotify API token...');
  
  const authString = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString('base64');

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${authString}`
      },
      body: 'grant_type=client_credentials'
    });

    if (!response.ok) {
      console.error(`Token request failed with status: ${response.status} ${response.statusText}`);
      try {
        const errorData: SpotifyErrorResponse = await response.json();
        throw new Error(`Spotify API error: ${errorData.error.message}`);
      } catch (jsonError) {
        throw new Error(`Spotify API error: ${response.status} ${response.statusText}`);
      }
    }

    const data: SpotifyTokenResponse = await response.json();
    console.log('Successfully obtained Spotify API token');
    return data.access_token;
  } catch (error) {
    console.error('Failed to get Spotify token:', error);
    throw new Error('Failed to authenticate with Spotify API');
  }
}

/**
 * Fetches data from Spotify API
 * @param endpoint API endpoint (without base URL)
 * @returns Promise<T> Parsed JSON response
 */
export async function getSpotifyData<T>(endpoint: string): Promise<T> {
  try {
    const token = await getSpotifyToken();
    const response = await fetch(`https://api.spotify.com/v1/${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      next: { revalidate: 86400 }
    });

    if (!response.ok) {
      console.error(`Spotify API error (${response.status}): ${response.statusText}`);
      console.error(`Endpoint: ${endpoint}`);
      
      try {
        const errorData: SpotifyErrorResponse = await response.json();
        throw new Error(`Spotify API error: ${errorData.error.message}`);
      } catch (jsonError) {
        throw new Error(`Spotify API error: ${response.status} ${response.statusText}`);
      }
    }

    return await response.json() as T;
  } catch (error) {
    console.error(`Error fetching Spotify data from ${endpoint}:`, error);
    throw error;
  }
}