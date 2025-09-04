import { getCompleteDiscography } from "@/lib/spotifyAlbums";

export default async function AlbumsPage() {
  const artistId = process.env.SPOTIFY_ARTIST_ID;

  if (!artistId) {
    return (
      <div className="p-10 text-sm text-red-500 text-center">
        Artist ID not configured.
      </div>
    );
  }

  const { albums, tracks } = await getCompleteDiscography(artistId);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className='font-bold text-4xl md:text-7xl tracking-tight rdap-sans-alt mb-12'><span className='font-extralight rdap-mono italic mr-1 md:mr-2'>D</span>iscography</h1>

      <section className="mb-20">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album) => (
            <div key={album.id} className="">
              {album.images[0] && (
                <a href={album.external_urls.spotify}>
                  <img
                    src={album.images[0].url}
                    alt={album.name}
                    className="w-full aspect-square object-cover mb-2 rounded-md md:rounded-xl"
                  />
                </a>
              )}
              <a href={album.external_urls.spotify}>
                <h3 className="tracking-tighter font-medium truncate">
                {album.name}
              </h3>
              </a>
              <p className="text-sm text-gray-600">
                {new Date(album.release_date).getFullYear()}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          All Tracks{" "}
          <span className="bg-zinc-800 p-1.5 rounded-md ml-2">
            {tracks.length}
          </span>
        </h2>
        <div className="space-y-2">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="flex items-center gap-4 p-3 hover:bg-zinc-900 rounded-lg transition-all duration-200"
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-medium truncate">{track.name}</h3>
                <p className="text-sm text-gray-600 truncate">
                  {track.artists.map((a) => a.name).join(", ")} •{" "}
                  {track.album.name}
                </p>
              </div>
              <span className="text-sm text-gray-500">
                {Math.floor(track.duration_ms / 60000)}:
                {((track.duration_ms % 60000) / 1000)
                  .toFixed(0)
                  .padStart(2, "0")}
              </span>
              <a
                href={track.external_urls.spotify}
                target="_blank"
                className="text-green-500 hover:text-green-600 ml-2"
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
