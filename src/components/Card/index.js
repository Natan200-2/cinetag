import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './Card.module.css'
import iconeFav from './favoritar.png'
import iconeDesfav from './desfavoritar.png'
import { Link } from 'react-router-dom';

function Card({id, titulo, capa}){
    const {favorito, adicionarFavorito} = useFavoritoContext();
    const eFavorito = favorito.some(fav => fav.id === id);
    const icone = !eFavorito ? iconeFav : iconeDesfav;

    return(
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa}/>
                <h2>{titulo}</h2>
            </Link>
            <img src={icone} alt='Favoritar filme' className={styles.favoritar} 
            onClick={ () => {
                adicionarFavorito({id, titulo, capa})
            }}/>
        </div>
    )
}

export default Card;