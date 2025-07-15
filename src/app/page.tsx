import Image from 'next/image';
import Hero from '../components/hero';
import Content from '../components/content';

export default function Home() {
  return (
    <>
    <Hero />
    <Content />

    <div className='h-screen'></div>
    </>
  );
}