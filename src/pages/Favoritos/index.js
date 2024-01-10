import Banner from 'components/Banner';
import styles from './Favoritos.module.css';
import Titulo from 'components/Titulo';
import { useFavoritoContext } from 'contextos/Favoritos';
import Card from 'components/Card';

function Favoritos() {
    const { favorito } = useFavoritoContext();

    return(
        <>
            <Banner image='Favoritos'/>
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map(fav => <Card {...fav} key={fav.id}/>)}
            </section>
        </>
    )
}

export default Favoritos;