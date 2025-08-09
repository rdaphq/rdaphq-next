// types/spotify.ts (not .d.ts)
export interface SpotifyArtist {
  id: string;
  name: string;
  external_urls: {
    spotify: string;
  };
}

export interface SpotifyAlbum {
  id: string;
  name: string;
  images: Array<{
    url: string;
    height: number;
    width: number;
  }>;
  album_type: string;
  release_date: string;
  external_urls: {
    spotify: string;
  };
}

export interface SpotifyTrack {
  id: string;
  name: string;
  album: SpotifyAlbum;
  artists: SpotifyArtist[];
  duration_ms: number;
  explicit: boolean;
  popularity: number;
  preview_url: string | null;
  external_urls: {
    spotify: string;
  };
}

export interface SpotifyTopTracksResponse {
  tracks: SpotifyTrack[];
}

export interface SpotifyArtistResponse {
  id: string;
  name: string;
  images: SpotifyAlbum['images'];
  followers: {
    total: number;
  };
  genres: string[];
  popularity: number;
}