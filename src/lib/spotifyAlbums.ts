// lib/spotifyAlbums.ts
import { getSpotifyData } from './spotify';
import type { SpotifyAlbum, SpotifyTrack } from '@/types/spotify';

interface SpotifyPagingResponse<T> {
  items: T[];
  limit: number;
  offset: number;
  total: number;
  next: string | null;
}

export async function getAllArtistAlbums(artistId: string): Promise<SpotifyAlbum[]> {
  let allAlbums: SpotifyAlbum[] = [];
  let url = `artists/${artistId}/albums?include_groups=album,single&limit=50&market=US`;
  
  do {
    const response = await getSpotifyData<SpotifyPagingResponse<SpotifyAlbum>>(url);
    allAlbums = [...allAlbums, ...response.items];
    url = response.next ? response.next.replace('https://api.spotify.com/v1/', '') : '';
  } while (url);

  return allAlbums;
}

export async function getAlbumTracks(albumId: string): Promise<SpotifyTrack[]> {
  let allTracks: SpotifyTrack[] = [];
  let url = `albums/${albumId}/tracks?limit=50`;
  
  do {
    const response = await getSpotifyData<SpotifyPagingResponse<SpotifyTrack>>(url);
    allTracks = [...allTracks, ...response.items];
    url = response.next ? response.next.replace('https://api.spotify.com/v1/', '') : '';
  } while (url);

  return allTracks;
}

export async function getCompleteDiscography(artistId: string): Promise<{
  albums: SpotifyAlbum[];
  tracks: SpotifyTrack[];
}> {
  try {
    // Get all albums
    const albums = await getAllArtistAlbums(artistId);
    
    // Remove duplicates (sometimes singles appear multiple times)
    const uniqueAlbums = albums.filter(
      (album, index, self) => 
        index === self.findIndex(a => a.id === album.id)
    );

    // Get all tracks for each album
    const tracks = await Promise.all(
      uniqueAlbums.map(async album => {
        const albumTracks = await getAlbumTracks(album.id);
        return albumTracks.map(track => ({
          ...track,
          album: {
            id: album.id,
            name: album.name,
            images: album.images,
            release_date: album.release_date,
            external_urls: album.external_urls,
            album_type: album.album_type
          }
        }));
      })
    );

    return {
      albums: uniqueAlbums,
      tracks: tracks.flat()
    };
  } catch (error) {
    console.error('Error fetching complete discography:', error);
    throw error;
  }
}