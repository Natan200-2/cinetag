import Banner from 'components/Banner';
import styles from './Player.module.css'
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import NaoEncontrado from 'pages/NaoEncontrado';
import { useEffect, useState } from 'react';

function Player() {
    const [video, setVideo] = useState();

    const parametros = useParams();
    useEffect(() =>{
        fetch(`https://my-json-server.typicode.com/NatanVilasBoas/cinetag-api/videos?id=${parametros.id}`)
        .then(resp => resp.json())
        .then(data => {
            setVideo(...data)
        })
    }, [])

    if(!video){
        return <NaoEncontrado />
    }

    return(
        <>
            <Banner image='Player'/>
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe width="100%" 
                height="100%" 
                src={video.link} 
                title={video.titulo} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen></iframe>
            </section>
        </>
    )
}

export default Player;