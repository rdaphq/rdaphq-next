import Hero from '../components/hero/hero';
import Music from '../components/music/music';
import Video from '../components/video/video';
import About from '../components/about/about';
import Merch from '../components/merch/merch';
import Quote from '../components/quote/quote';
import Divider from '../components/divider/divider';
import Tickets from '../components/tickets/tickets';
import Socials from '../components/socials/socials';

const env = process.env.ENVIROMENT;

export default function Home() {
  return (
    <>
    <Hero />
    <div className='whois-icon w-fit text-center pt-20 p-1 mx-auto'>
      <i className="fi fi-rr-arrow-down text-3xl"></i>
    </div>
    { env === 'DESIGN' ? '' : <Music /> }
    <Video />
    <Merch />
    {/* <Tickets /> */}
    <Socials />
    <About />
    </>
  );
}