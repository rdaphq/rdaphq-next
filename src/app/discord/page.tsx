import './page.css';
import Image from 'next/image';
import Discord from '$/discord-symbol-white.svg';

export default function DiscordHome() {
    return (
        <div className="discord h-[80vh] flex items-center justify-center">
            <div className="discord-container flex flex-col items-center p-8 rounded-2xl">
                <Image src={Discord} alt='Discord Symbol' className='discord-symbol w-16 mb-4' />
                <div className='text-center flex flex-col items-center'>
                    <h3 className='text-2xl font-bold text-white'>Are you sure?</h3>
                    <p className='text-sm text-white/50 mb-4'>Join to get access to exclusive content, events, giveaways and more.</p>
                    <a href="https://discord.com/invite/rkXGv52aJY">
                        <div className="discord-join w-fit">
                            Join Server
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}