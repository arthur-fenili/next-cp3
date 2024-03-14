import './styles.css'
import Image from 'next/image';


const CardFilm = (props : Props) => {
    return (
        <>
        <div className='card'>
            <p>{props.title}</p>
            <Image src={props.image} width={150} height={190} alt='Imagem do filme'/>
            <button className= 'button'><a href={props.link} target='_blank'>Assistir</a></button>
        </div>
        </>
    );
}


export default CardFilm;