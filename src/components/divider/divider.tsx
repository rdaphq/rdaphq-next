import './divider.css';
import Image from 'next/image';
import Icon from 'public/rdap-iso.svg';

export default function Divider () {
    return (
        <div className="divider flex flex-col items-center justify-center pt-20 select-none">
            {/* <span className='divider-line'></span> */}
            <div className="divider-core flex items-center">
                <Image
                className='divider-img animate-pulse'
                src={Icon}
                alt='Rdap Iso'
                />
            </div>
            {/* <span className='divider-line alt'></span> */}
        </div>
    )
}