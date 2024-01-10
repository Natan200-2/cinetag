import Banner from 'components/Banner';
import styles from './Favoritos.module.css';
import Titulo from 'components/Titulo';

function Favoritos() {
    return(
        <>
            <Banner image='Favoritos'/>
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>

            </section>
        </>
    )
}

export default Favoritos;