import './quote.css';

export default function Quote () {
    return (
        <div className='quote'>
            <div className='quote-container w-full'>
                <section className='phrase py-10 text-center'>
                    <h3 className='thequote font-medium italic rdap-sans-alt tracking-tight uppercase'>If you can't have fun, there's no sense in doing it.</h3>
                    <p className='text-white/30 text-sm rdap-sans-alt'>Paul Walker</p>
                </section>
            </div>
        </div>
    );
}