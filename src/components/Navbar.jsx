import skully from '@/assets/craneo.png';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <header className='navbar'>
            <nav className='nav__izquierda'>
                <Link href="/">inicio</Link>
                <Link href="#">productos</Link>
                <Link href="#">blog</Link>
            </nav>

            <div className='logo'>
                <figure>
                    <Image src={skully} alt='logo-skully' />
                </figure>
                <span>skully</span>
            </div>

            <nav className='nav__derecha'>
                <Link href="#">acerca de</Link>
                <Link href="#">contacto</Link>
                <Link href="#">login</Link>
            </nav>
        </header>
    )
}

export default Navbar