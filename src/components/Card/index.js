import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './Card.module.css'
import iconeFav from './favoritar.png'
import iconeDesfav from './desfavoritar.png'

function Card({id, titulo, capa}){
    const {favorito, adicionarFavorito} = useFavoritoContext();
    const eFavorito = favorito.some(fav => fav.id === id);
    const icone = !eFavorito ? iconeFav : iconeDesfav;

    return(
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa}/>
            <h2>{titulo}</h2>
            <img src={icone} alt='Favoritar filme' className={styles.favoritar} 
            onClick={ () => {
                adicionarFavorito({id, titulo, capa})
            }}/>
        </div>
    )
}

export default Card;