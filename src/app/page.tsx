import Hero from '../components/hero/hero';
import Music from '../components/music/music';
import Video from '../components/video/video';
import About from '../components/about/about';
import Quote from '../components/quote/quote';

import Divider from '../components/divider/divider';

const env = process.env.ENVIROMENT;

export default function Home() {
  return (
    <>
    <Hero />
    { env === 'DESIGN' ? '' : <Music /> }
    <Video />
    <Divider />
    <About />
    {/* <Quote /> */}
    </>
  );
}