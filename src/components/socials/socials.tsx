import Link from "next/link";
import './socials.css';

export default function Socials() {
    const Socials = [
        {
            name: 'Spotify',
            url: 'https://open.spotify.com/artist/16ccV3320Itq7KIXOhDr3S',
            iconClass: 'fi-brands-spotify'
        },
        {
            name: 'YouTube',
            url: 'https://youtube.com/@rdaphq',
            iconClass: 'fi-brands-youtube'
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com/rdaphq',
            iconClass: 'fi-brands-instagram'
        },
        {
            name: 'SoundCloud',
            url: 'https://soundcloud.com/rdaphq',
            iconClass: 'fi-brands-soundcloud'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/rdaphq',
            iconClass: 'fi-brands-github'
        },
        {
            name: 'Discord',
            url: 'https://discord.com/invite/rkXGv52aJY',
            iconClass: 'fi-brands-discord'
        },
        {
            name: 'X (Twitter)',
            url: 'https://x.com/RdapHQ',
            iconClass: 'fi-brands-twitter-alt'
        }
    ]
    return (
        <section className="socials">
            <div className="socials-container py-30 px-6 flex flex-col items-center justify-center w-full gap-6">
                <div className="socials-title text-center">
                    <span className='uppercase rdap-small tracking-[4px] text-gray-300'>Stay</span>
                    <h2 className='font-bold text-5xl md:text-8xl tracking-tight rdap-sans-alt mb-2'><span className='font-extralight rdap-mono italic mr-1 md:mr-3'>T</span>uned</h2>
                </div>

                <div className="socials-wrapper flex items-center justify-center flex-wrap gap-6 px-6">
                    {Socials.map((social) => (
                        <Link key={social.url} href={social.url} className="socials-item">
                            <i className={`fi ${social.iconClass} text-4xl md:text-5xl`}></i>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}