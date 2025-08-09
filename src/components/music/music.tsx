import './music.css'
import { getCompleteDiscography } from '@/lib/spotifyAlbums';

export default async function Music() {
    const artistId = process.env.SPOTIFY_ARTIST_ID;
  
    if (!artistId) {
        return <div className="p-10 text-sm text-red-500 text-center">Artist ID not configured.</div>;
    }

    const { albums } = await getCompleteDiscography(artistId);

    return (
        <>
            <section className="music">
                <div className="music-container pt-20 flex flex-col items-center justify-center w-full gap-6">
                    <div className="music-title w-full text-center">
                        <span className='uppercase rdap-small tracking-[4px]'>Discover</span>
                        <h2 className='font-bold text:5xl md:text-8xl'>Music</h2>
                    </div>

                    <div className="music-border flex flex-col items-center justify-start w-full">
                        <div className="music-items relative flex items-start justify-start gap-4 w-full overflow-x-auto snap-x snap-mandatory">
                            {albums.map((album) => (
                                <div key={album.id} className="w-90 music-item rounded-3xl overflow-clip border border-white/4 shrink-0 snap-center">
                                    <img className='w-full' src={album.images[0].url} alt={`${album.name}`} />
                                    <div className="py-2 px-4">
                                        <h3 className='font-medium tracking-tighter'>{album.name}</h3>
                                        <span className='rdap-small text-white/40 mt-2'>{album.release_date.slice(0, 4)}</span>
                                    </div>
                                </div>
                            )).slice(0, 10)}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}