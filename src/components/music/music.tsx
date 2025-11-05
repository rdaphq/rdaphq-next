import './music.css';
import { getCompleteDiscography } from '@/lib/spotifyAlbums';

export default async function Music() {
    const artistId = process.env.SPOTIFY_ARTIST_ID;
  
    if (!artistId) {
        return <div className="p-10 text-sm text-red-500 text-center">Artist ID not configured.</div>;
    }

    const { albums } = await getCompleteDiscography(artistId);

    return (
        <>
            <section id='explore' className="music">
                <div className="music-container pt-20 flex flex-col items-center justify-center w-full gap-6">
                    <div className="music-title text-center">
                        <span className='uppercase rdap-small tracking-[4px] text-gray-300'>Latest</span>
                        <h2 className='font-bold text-5xl md:text-8xl tracking-tight rdap-sans-alt'><span className='font-extralight rdap-mono italic mr-1 md:mr-3'>M</span>usic</h2>
                    </div>

                    <div className="music-items relative flex items-stretch xl:items-center justify-start xl:justify-center xl:flex-wrap gap-4 w-full overflow-x-auto snap-x snap-mandatory">
                        {albums.map((album) => (
                            <a key={album.id} href={album.external_urls.spotify}>
                                <div className="flex flex-col items-center md:items-start w-66 md:w-96 music-item rounded-2xl md:rounded-3xl overflow-clip border border-white/10 shrink-0 snap-center">
                                    <img className='w-full' src={album.images[0].url} alt={`${album.name}`} />
                                    <div className="py-2 px-4 h-full flex flex-col justify-between gap-1">
                                        <h3 className='text-white/70 font-medium tracking-tight truncate'>{album.name}</h3>
                                        <span className='text-center md:text-left rdap-short text-white/40'>{album.release_date.slice(0, 4)}</span>
                                    </div>
                                </div>
                            </a>
                        )).slice(0, 3)}
                    </div>
                </div>
            </section>
        </>
    )
}