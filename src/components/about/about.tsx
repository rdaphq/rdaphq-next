import Rdap from '$/rdap.png';
import Iso from '$/rdap-iso.svg';

import Image from 'next/image';

export default function WhoIsRdap () {
    return (
        <div className="whois w-full relative overflow-hidden">
            <Image src={Iso} alt='Rdap Iso Background' className='absolute bottom-10 -right-30 sm:-right-36 sm:-bottom-50 max-w-80 sm:max-w-xl -rotate-16 -z-1 opacity-5' />
            <div className="whois-container flex items-center w-full py-12 px-8 max-w-[820px] mx-auto">
                <div>
                    <h3 className='flex items-center justify-center gap-2 w-full mb-8 flex-wrap'>
                        <p className='text-3xl md:text-5xl italic font-bold text-center'>Who the f*ck is</p>
                        <Image
                        src={Rdap}
                        alt='Rdap'
                        loading='lazy'
                        className='w-16 md:w-22' />
                    </h3>
                    <div className="whois-description text-center z-2">
                        <p className='text-[.8rem] text-zinc-400 mb-4'>Rdap is a musical artist and a developer hailing from Argentina, currently based in Colombia, creating tracks since 2019 that pulse with raw energy and uniqueness. With a sound that fuses hip-hop and electronic influences, Rdap's innovative production and fearless artistry have built a loyal fanbase.</p>

                        <p className='text-[.8rem] text-zinc-400'>Beyond the music, Rdap is a visionary who channels a dystopian, futuristic aesthetic into every project, drawing inspiration from urban chaos and the boundless possibilities of sound. Whether it's laying down tracks in the studio or pushing creative boundaries, Rdap invites you to join the movement, where music isn't just heard, it's felt.</p>
                    </div>
                    <div className='flex items-center justify-center mt-10'>
                        <Image src={Iso} alt='Rdap Iso' className='max-w-8 opacity-50' />
                    </div>
                </div>
            </div>
        </div>
    )
}