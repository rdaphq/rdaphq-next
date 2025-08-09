import Hero from '../components/hero/hero';
import Music from '../components/music/music';
import Quote from '../components/quote/quote';

export default function Home() {
  return (
    <>
    <Hero />
    <Music />
    {/* <Quote /> */}
    <div className='h-screen'></div>
    </>
  );
}