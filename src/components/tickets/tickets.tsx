import Image from "next/image";

export default function Tickets() {
    
    return (
        <section className="tickets">
            <div className="tickets-container py-30 flex flex-col items-center justify-center w-full gap-6">
                <div className="tickets-title text-center">
                    <span className='uppercase rdap-small tracking-[4px] text-gray-300'>Coming</span>
                    <h2 className='font-bold text-5xl md:text-8xl tracking-tight rdap-sans-alt mb-2'><span className='font-extralight rdap-mono italic mr-1 md:mr-3'>E</span>vents</h2>
                </div>

                <p className="text-sm text-center text-white/30 rdap-sans-alt">Not available yet.</p>
            </div>
        </section>
    )
}