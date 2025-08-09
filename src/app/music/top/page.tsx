// app/music/page.tsx
import { getSpotifyData } from '@/lib/spotify';
import type { SpotifyTopTracksResponse, SpotifyArtistResponse } from '@/types/spotify';

import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Music - Top Tracks'
};

async function getArtistData(artistId: string): Promise<SpotifyArtistResponse | null> {
  try {
    return await getSpotifyData<SpotifyArtistResponse>(`artists/${artistId}`);
  } catch (error) {
    console.error('Failed to fetch artist data:', error);
    return null;
  }
}

async function getTopTracks(artistId: string): Promise<SpotifyTopTracksResponse | null> {
  try {
    // Make sure to include market parameter for top tracks
    return await getSpotifyData<SpotifyTopTracksResponse>(
      `artists/${artistId}/top-tracks?market=US`
    );
  } catch (error) {
    console.error('Failed to fetch top tracks:', error);
    return null;
  }
}

export default async function MusicPage() {
  // Log environment variables for debugging (redacted for security)
  console.log('SPOTIFY_ARTIST_ID exists:', !!process.env.SPOTIFY_ARTIST_ID);
  console.log('SPOTIFY_CLIENT_ID exists:', !!process.env.SPOTIFY_CLIENT_ID);
  console.log('SPOTIFY_CLIENT_SECRET exists:', !!process.env.SPOTIFY_CLIENT_SECRET);
  
  // Fallback to a known working artist ID if needed
  const artistId = process.env.SPOTIFY_ARTIST_ID || '4YLtscXsxbVgi031ovDDdh'; // Drake as fallback
  
  if (!artistId) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="text-red-500">Error: Artist not found.</div>
        <p className="mt-2">Contact Rdap to report this problem.</p>
      </div>
    );
  }

  console.log('Using artist ID:', artistId.substring(0, 4) + '...');

  let artistData, topTracks;
  try {
    [artistData, topTracks] = await Promise.all([
      getArtistData(artistId),
      getTopTracks(artistId)
    ]);
  } catch (error) {
    console.error('Error in Promise.all:', error);
  }

  if (!artistData || !topTracks) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="text-red-500">Failed to load music data</div>
        <p className="mt-2">Please check the console for more details.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <header className="flex items-center gap-6 mb-8">
        {artistData.images?.[0] && (
          <Image
            src={artistData.images[0].url}
            alt={artistData.name}
            className="w-32 h-32 rounded-full object-cover"
            width={100}
            height={100}
          />
        )}
        <div>
          <h1 className="text-4xl font-bold">{artistData.name}</h1>
          <p className="text-gray-500 mt-2">
            {artistData.followers?.total?.toLocaleString()} followers
          </p>
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Top Tracks</h2>
        <div className="grid gap-4">
          {topTracks.tracks?.map((track) => (
            <div
              key={track.id}
              className="flex items-center gap-4 p-4 hover:bg-zinc-900 rounded-lg transition-colors"
            >
              {track.album.images?.[0] && (
                <Image
                  src={track.album.images[0].url}
                  alt={track.album.name}
                  className="w-40 h-40 rounded"
                  width={100}
                  height={100}
                />
              )}
              <div className="flex-1">
                <h3 className="font-medium">{track.name}</h3>
                <p className="text-sm text-gray-600">
                  {track.artists?.map(artist => artist.name).join(', ')}
                </p>
              </div>
              <div className="text-sm text-gray-500">
                {track.album.release_date && new Date(track.album.release_date).toLocaleDateString()}
              </div>
              <a
                href={track.external_urls?.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600"
              >
                <i className="fi fi-rr-play"></i>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}