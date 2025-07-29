import Image from 'next/image';
import Hero from '../components/hero/hero';
import Since from '../components/since/since';

export default function Home() {
  return (
    <>
    <Hero />
    <Since />

    <div className='h-screen'></div>
    </>
  );
}