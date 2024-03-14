import './styles.css'
import Image from 'next/image';
import im from './logotipo.jpg'

const Header = () => {
    return (
        <>
        <header className='header'>
            <Image src={im.src} width={150} height={100} alt='Logotipo'/>
            <p>Os melhores filmes estão aqui</p>
        </header>
        </>
    );
}

export default Header;