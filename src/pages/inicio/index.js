import Cabecalho from 'components/Cabecalho'
import './Inicio.module.css'
import Rodape from 'components/Rodape';
import Banner from 'components/Banner';

const Inicio = () => {
    return(
        <>
            <Cabecalho/>
            <Banner image='Home'/>
            <Rodape />
        </>
    )
}

export default Inicio;