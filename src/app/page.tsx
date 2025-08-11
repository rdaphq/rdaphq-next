import Hero from '../components/hero/hero';
import Music from '../components/music/music';
import Video from '../components/video/video';
import Quote from '../components/quote/quote';

import Divider from '../components/divider/divider';

export default function Home() {
  return (
    <>
    <Hero />
    <Music />
    <Video />
    <Divider />
    {/* <Quote /> */}
    <div className='h-screen'></div>
    </>
  );
}