import Image from "next/image";
import './merch.css';

import EmptyHoodie from '$/merch/rdap_hoodie_1.png';
import Link from "next/link";

export default function Merch() {
    const products = [
        {
            name: 'Empty Hoodie',
            url: 'https://shop.rdaphq.com/product/empty-hoodie',
            price: '64.99',
            images: [
                {
                    url: EmptyHoodie
                }
            ]
        },
        {
            name: 'Oversize Rdap T-Shirt',
            url: 'https://shop.rdaphq.com/product/oversize-shirt',
            price: '64.99',
            images: [
                {
                    url: EmptyHoodie
                }
            ]
        }
    ]
    
    return (
        <section className="merch bg-gray-300">
            <div className="merch-container py-20 flex flex-col items-center justify-center w-full gap-6">
                <div className="merch-title text-center">
                    <span className='uppercase rdap-small tracking-[4px] font-medium text-zinc-700'>Buy</span>
                    <h2 className='font-bold text-5xl md:text-8xl tracking-tight rdap-sans-alt mb-2 text-zinc-900'><span className='font-extralight rdap-mono italic mr-1 md:mr-3'>M</span>erch</h2>
                </div>

                <div className="merch-box">
                    <div className="merch-box-wrapper flex items-start justify-center gap-10 flex-wrap">
                        {products.map((product, index) => (
                            <div key={index} className="merch-item flex flex-col items-center justify-center gap-2">
                                <div className="merch-images">
                                    {product.images.map((image, index) => (
                                        <Link href={product.url}><Image key={index} src={image.url} alt={`Product Image ${index}`} className="merch-image" /></Link>
                                    ))}
                                </div>
                                <Link href={product.url}><h3 className="text-zinc-800 rdap-mono text-center">{product.name}</h3></Link>
                                <Link href={product.url} className="merch-link flex items-center justify-center">Shop</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}