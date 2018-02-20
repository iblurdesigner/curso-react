import React from 'react';
import Media from './media';
import './playlist.css';
// import Play from '../../icons/components/play';
// import Pause from '../../icons/components/pause';


function Playlist(props) {
    //const playlist = props.data.categories[0].playlist     ESTO YA NO PORQUE ESTA HARDCODEADO
    //console.log(props.data);   ESTO SOLO ERA PARA PRUEBA
    return(
      <div className="Playlist">
        {
          props.playlist.map((item) => {
            // return <Media title = {item.title} key ={item.id}/>  ESTO ES SIN ES
            return <Media openModal={props.handleOpenModal} {...item} key ={item.id}/>
          })
        }
      </div>
    )
}

export default Playlist;
