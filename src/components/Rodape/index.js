import styles from './Rodape.module.css';

const Rodape = ({children}) => {
    return(
        <footer className={styles.rodape}>
            <h3>
                {children}
            </h3>
        </footer>
    )
}

export default Rodape;