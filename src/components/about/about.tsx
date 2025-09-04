import Image from 'next/image';
import Rdap from '$/rdap.png';
import Iso from '$/rdap-iso.svg';

const bio = `Rdap is a dynamic musical artist hailing from <b>Argentina</b>, currently based in Colombia, creating tracks since 2019 that pulse with raw energy and uniqueness. With a sound that fuses hip-hop, electronic, and Latin influences, Rdap's innovative production and fearless artistry have built a loyal fanbase. Beyond the music, Rdap is a visionary who channels a dystopian, futuristic aesthetic into every project, drawing inspiration from urban chaos and the boundless possibilities of sound. Whether it's laying down tracks in the studio or pushing creative boundaries, Rdap invites you to join the movement—where music isn't just heard, it's felt.`

export default function WhoIsRdap () {
    return (
        <div className="whois flex justify-center">
            <div className="whois-container flex items-center w-full py-14 max-w-[1000px]">
                <div>
                    <h3 className='flex items-center justify-center gap-2 w-full mb-8'>
                        <p className='text-5xl italic font-bold'>Who the f*ck is</p>
                        <Image
                        src={Rdap}
                        alt='Rdap'
                        loading='lazy'
                        className='w-22' />
                    </h3>
                    <div className="whois-description text-center">
                        <p className='text-sm text-white/50 mb-4'>Rdap is a dynamic musical artist and a developer hailing from Argentina, currently based in Colombia, creating tracks since 2019 that pulse with raw energy and uniqueness. With a sound that fuses hip-hop and electronic influences, Rdap's innovative production and fearless artistry have built a loyal fanbase.</p>

                        <p className='text-sm text-white/50'>Beyond the music, Rdap is a visionary who channels a dystopian, futuristic aesthetic into every project, drawing inspiration from urban chaos and the boundless possibilities of sound. Whether it's laying down tracks in the studio or pushing creative boundaries, Rdap invites you to join the movement, where music isn't just heard, <b>it's felt</b>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}