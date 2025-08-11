import './video.css';

export default async function Music() {
    return (
        <>
            <section className="video">
                <div className="video-container py-20 flex flex-col items-center justify-center w-full gap-6">
                    <div className="video-title text-center">
                        <span className='uppercase rdap-small tracking-[4px] text-gray-300'>Latest</span>
                        <h2 className='font-bold text-5xl md:text-8xl tracking-tight rdap-sans-alt mb-2'><span className='font-extralight rdap-mono italic mr-1 md:mr-3'>U</span>pload</h2>
                    </div>

                    <iframe className='video-frame w-[84vw] sm:w-full sm:h-90 h-50 rounded-2xl sm:rounded-3xl' src="https://www.youtube.com/embed/OuMc2hBAQOY?si=4V7n6pRjAsO6c9oH" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
            </section>
        </>
    )
}