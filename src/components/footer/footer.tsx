export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className='border-t border-white/10 py-6 text-[.7rem] text-white/20 text-center'>&copy; {year} Rdap ─ Almost all rights reserved.</footer>
    )
}