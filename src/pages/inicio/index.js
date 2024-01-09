import Cabecalho from 'components/Cabecalho'
import './Inicio.module.css'
import Rodape from 'components/Rodape';
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';

const Inicio = () => {
    return(
        <>
            <Cabecalho/>
            <Banner image='Home'/>
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <Rodape />
        </>
    )
}

export default Inicio;